# Spec Delta: ReviewTool Active Guard

## MODIFIED Requirements

### Requirement: ReviewTool 条件渲染
WHILE 以前 ReviewTool 无论 active 值如何都渲染评审 overlay,
系统 SHALL 仅在 active 为 true 时渲染评审 overlay,
AND 当 active 为 false 时不渲染任何评审相关 DOM 节点。

#### Scenario: 默认隐藏
GIVEN 页面加载完成
WHEN active prop 为 false
THEN 页面上不显示评审 toolbar、highlight box 或任何评审 overlay。

#### Scenario: 打开评审
GIVEN 页面加载完成
WHEN active prop 变为 true
THEN 页面显示评审 toolbar 和评审 overlay。

#### Scenario: 退出评审
GIVEN 评审 overlay 已打开
WHEN 用户点击“退出评审”或按 ESC 键
THEN onActiveChange(false) 被调用
AND 评审 overlay 从页面消失。
