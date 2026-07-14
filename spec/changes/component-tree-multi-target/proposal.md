# Proposal: 组件树抽屉支持展示多个选中目标

## Change ID

`component-tree-multi-target`

## Why

用户反馈：多选元素时，虽然评审表单显示了多个目标标签，但「组件树检查器」抽屉只反映了第一个选中元素的 DOM 树与组件树，体现不出多个目标各自的路径。

代码核实（`src/ReviewTool.jsx`）：

- 每个目标在落盘时确实保存了独立的 `componentTree`（`:187`），包含 `dom` 祖先链与 `framework` 组件链；多选时 `targets` 数组有多项，数据层面已分别保存。
- 但组件树抽屉只能看到全局 `componentTree` 状态（`:72, 435`），它只在有选中元素时取 `selection.selectedElements[0].el` 调用 `getComponentTree()`。因此：
  - 第二个及以后的选中目标没有自己的树；
  - 树中也没有任何视觉标记告诉用户哪一个节点是「被选中的目标本身」。

## What Changes

1. **组件树抽屉改为按目标分组展示**：当存在多个选中元素时，抽屉内按「目标 1 / 目标 2 …」折叠或分块展示，每块包含该目标自己的框架组件树与 DOM 树。
2. **高亮选中节点**：每棵 DOM 树的叶子节点（即被选中的元素本身）使用特殊类名（如 `rpr-tree-node-selected`）高亮，并在节点后追加「已选中」标签。
3. **零选中与单选中保持现有体验**：单选时与当前一致，仅多选时新增分组展示。
4. 不改动 `inspector.js` 中 `getComponentTree` / `getNodeInfo` 的返回值结构；不改动落盘数据结构，保持向后兼容。

## Impact

- **代码**：`src/ReviewTool.jsx`、`src/style.css`（新增选中节点样式）
- **行为**：多选场景下组件树抽屉能完整反映每个目标的 DOM 路径与组件路径；评审记录文件格式不变
- **无破坏性变更**

## 验证

- react-test-app 端到端新增用例：
  - 进入元素模式，Ctrl/Cmd 多选两个 `.test-card`
  - 打开「组件树」抽屉
  - 断言抽屉内出现 2 个目标分组（或对应两个选中元素的 selector/aria）
  - 断言每个 DOM 树的叶子节点带有 `rpr-tree-node-selected` 类或「已选中」标记
  - 单选时仍只展示 1 棵树
- 既有 e2e 全量回归通过
