## MODIFIED Requirements

### Requirement: 多元素评审导出须包含每个目标的定位信息
WHEN 一条评审包含多个元素目标,
THEN 系统 SHALL 在 Markdown/JSON/ZIP 导出中为每个元素目标输出其对应的定位信息
AND  SHALL NOT 仅输出第一个元素的定位信息。

#### Scenario: 选中两个元素保存并导出 Markdown
GIVEN 用户已选中两个不同的 DOM 元素
WHEN 用户保存评审并导出 Markdown 报告
THEN 报告中出现两段定位信息
AND 第一段包含第一个元素的 cssSelector / xpath / aria / testId
AND 第二段包含第二个元素的 cssSelector / xpath / aria / testId。

#### Scenario: 选中两个元素保存并导出 JSON
GIVEN 用户已选中两个不同的 DOM 元素
WHEN 用户保存评审并导出 JSON 报告
THEN `targets[0].locators` 存在且包含第一个元素的定位信息
AND `targets[1].locators` 存在且包含第二个元素的定位信息。

### Requirement: 兼容旧数据与单目标评审
WHEN 评审记录中只有顶层 locators 或仅有一个目标,
THEN 系统 SHALL 继续正常输出定位信息
AND 旧报告格式 SHALL NOT 被破坏。

#### Scenario: 打开旧单元素评审记录
GIVEN 一条旧单元素评审记录，locators 保存在顶层
WHEN 用户导出 Markdown 或 JSON
THEN 报告仍包含该元素的定位信息。

## ADDED Requirements

None.

## REMOVED Requirements

None.
