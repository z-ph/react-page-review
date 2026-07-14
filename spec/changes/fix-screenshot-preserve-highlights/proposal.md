# Proposal: 截图保留选中高亮、仅隐藏评审栏与弹窗

## Change ID

`fix-screenshot-preserve-highlights`

## Why

在 `fix-highlight-scroll-and-screenshot-cleanup` 中，为了解决截图里出现评审工具栏、弹窗等自身 UI 的问题，实现方式是在截图期间将整个 `.rpr-review-overlay` 设为 `display: none`。这虽然去除了评审栏和弹窗，但同时把高亮框也一并去掉了。

实际使用中发现，导出的截图需要保留高亮框，才能让阅读报告的人一眼看出被评审的是哪个元素或区域。因此需要更精确地隐藏评审 UI：只隐藏工具栏、弹窗、抽屉，保留高亮框。

## What Changes

1. **给评审弹窗与抽屉增加可识别的根节点类名**：
   - 评审表单弹窗：`rootClassName="rpr-review-modal-root"`
   - 组件树抽屉 / 评审列表抽屉：`rootClassName="rpr-review-drawer-root"`
   - 确认弹窗：`rootClassName="rpr-review-confirm-root"`

2. **`captureScreenshots` 改为按选择器隐藏 UI**：
   - 隐藏选择器：`.rpr-review-toolbar`、`.rpr-review-modal-root`、`.rpr-review-drawer-root`、`.rpr-review-confirm-root`
   - 不再隐藏 `.rpr-review-overlay`，因此 `.rpr-highlight-box`、`.rpr-drag-rect` 等高亮框在截图中保持可见
   - 截图完成后在 `finally` 中恢复被隐藏元素的 `display`

3. **更新 e2e 断言**：
   - 验证截图期间工具栏曾隐藏
   - 验证截图期间 overlay 未被隐藏（高亮保留）
   - 验证截图完成后工具栏显示已恢复

## Impact

- **代码**：`src/ReviewTool.jsx`、`test-react-e2e.cjs`
- **行为**：完整页面 / 当前视口 / 框选区域截图中保留元素高亮与框选高亮；评审工具栏、弹窗、抽屉不再出现在截图中
- **无破坏性变更**：截图文件格式、评审记录数据结构不变

## 验证

- react-test-app 端到端用例更新：
  - 断言保存评审截图期间工具栏被隐藏
  - 断言保存评审截图期间 overlay 未被隐藏
  - 断言截图完成后工具栏恢复显示
  - 既有 38 项 e2e 全部保持通过
