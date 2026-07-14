## ADDED Requirements

### Requirement: 多选时组件树抽屉展示所有选中目标
WHEN 用户在元素模式下选中了 2 个及以上页面元素并打开「组件树检查器」抽屉
THEN 抽屉 SHALL 按目标分组，分别展示每个选中元素的 DOM 路径与框架组件路径
AND 每个 DOM 树 SHALL 以视觉高亮标示出被选中的目标节点（即该树的叶子节点）。

#### Scenario: 多选两个元素后查看组件树
GIVEN 用户已选中 `.test-card:nth-child(1)` 和 `.test-card:nth-child(2)`
WHEN 用户点击工具栏「组件树」按钮打开抽屉
THEN 抽屉内出现两个目标分组（如「目标 1」「目标 2」），分别对应两个选中元素
AND 每组都包含独立的 DOM 树与框架组件树
AND 每棵 DOM 树的最后一个节点（对应选中元素）带有 `rpr-tree-node-selected` 高亮样式。

#### Scenario: 单选时组件树体验不变
GIVEN 用户只选中了一个元素
WHEN 用户打开组件树抽屉
THEN 抽屉内只展示一组目标，布局与当前单选行为一致。
