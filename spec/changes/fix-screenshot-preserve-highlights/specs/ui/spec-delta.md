## MODIFIED Requirements

### Requirement: 截图内容纯净
WHEN 用户导出包含截图的评审（选中目标 / 当前视口 / 完整页面）
THEN 截图 SHALL 只包含被评审页面自身内容
AND 截图 SHALL NOT 包含评审工具栏、评审弹窗、抽屉等评审工具自身 UI
AND 截图 SHALL 保留已选元素高亮框与框选区域高亮框，以便阅读报告时识别评审目标。

#### Scenario: 完整页面截图保留高亮且不包含工具栏
GIVEN 用户已选中一个元素且评审弹窗已打开
WHEN 用户勾选「完整页面」截图并保存评审
THEN 生成的完整页面截图中保留该元素的红色高亮框
AND 截图中不出现评审工具栏与评审弹窗。

#### Scenario: 当前视口截图保留高亮且不包含弹窗
GIVEN 用户已框选一个区域且评审弹窗已打开
WHEN 用户勾选「当前视口」截图并保存评审
THEN 生成的视口截图中保留该框选区域的虚线高亮框
AND 截图中不出现评审弹窗与抽屉。

#### Scenario: 框选区域截图保留高亮且不包含工具栏
GIVEN 用户已框选一个区域
WHEN 用户勾选「选中目标」截图并保存评审
THEN 生成的框选区域截图中保留对应的虚线高亮框
AND 截图中不出现评审工具栏。

## ADDED Requirements

None.

## REMOVED Requirements

None.
