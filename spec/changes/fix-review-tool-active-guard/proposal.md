# Proposal: 修复 ReviewTool 未根据 active 条件渲染的问题

## Change ID

`fix-review-tool-active-guard`

## Why

`ReviewTool` 组件始终通过 `createPortal` 渲染评审 overlay，没有根据 `active` prop 条件渲染。同时 CSS 中 `.review-overlay` 没有默认隐藏规则。这导致：

1. 页面加载后评审 overlay 立即显示（即使用户没有点击评审入口）。
2. 用户点击“退出评审”或按 ESC 后，`onActiveChange(false)` 虽然被调用，但 overlay 仍然可见，因为组件没有重新渲染为 null。

## What Changes

1. 在 `ReviewTool.jsx` 的 render 返回前增加 `if (!active) return null`。
2. 确保 `active` 为 false 时不创建任何 DOM 节点。
3. 保持 `onActiveChange` 回调行为不变。

## Impact

- **代码**：`src/ReviewTool.jsx`
- **行为**：`active` 为 false 时评审 overlay 完全隐藏；`active` 为 true 时正常显示。
- **无破坏性变更**：对外 API 不变。

## 验证

- 在 `bidding-prototype` 中引入修复后的包。
- 页面加载后评审 overlay 默认隐藏。
- 点击右下角评审按钮后 overlay 显示。
- 点击“退出评审”或按 ESC 后 overlay 隐藏。
