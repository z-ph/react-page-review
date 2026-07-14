## MODIFIED Requirements

### Requirement: 当前视口截图保留滚动位置
WHEN 用户选择「当前视口」截图并保存评审
THEN 系统 SHALL 捕获用户当前滚动位置对应的可见区域
AND 截图 SHALL NOT 回到文档顶部。

#### Scenario: 滚动后保存当前视口截图
GIVEN 页面高度超过视口高度且用户已向下滚动 300px
WHEN 用户勾选「当前视口」截图并保存评审
THEN 生成的 PNG 高度等于视口高度
AND 截图顶部内容对应滚动 300px 后的可见区域。

### Requirement: 完整页面截图包含全部滚动内容
WHEN 用户选择「完整页面」截图并保存评审
THEN 系统 SHALL 捕获从文档顶部到底部的全部可滚动内容
AND 截图高度 SHALL 大于当前视口高度。

#### Scenario: 有滚动时保存完整页面截图
GIVEN 页面高度超过视口高度
WHEN 用户勾选「完整页面」截图并保存评审
THEN 生成的 PNG 高度大于视口高度
AND 截图底部包含文档末尾内容。

### Requirement: 截图中高亮框与目标对齐
WHEN 用户保存包含高亮的完整页面或当前视口截图
THEN 高亮框 SHALL 出现在被标注目标在截图中的对应位置
AND 高亮框 SHALL NOT 因页面滚动而偏移到错误位置。

#### Scenario: 滚动后完整页面截图高亮对齐
GIVEN 用户已选中一个位于页面下半部分的元素且页面已向下滚动
WHEN 用户勾选「完整页面」截图并保存评审
THEN 生成的完整页面截图中，高亮框覆盖该元素在文档中的实际位置。

#### Scenario: 滚动后当前视口截图高亮对齐
GIVEN 用户已选中一个位于当前视口内的元素且页面已向下滚动
WHEN 用户勾选「当前视口」截图并保存评审
THEN 生成的视口截图中，高亮框覆盖该元素在当前视口中的实际位置。

## ADDED Requirements

None.

## REMOVED Requirements

None.
