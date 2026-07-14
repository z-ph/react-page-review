# Proposal: 修复高亮跟随失效与截图包含评审 UI

## Change ID

`fix-highlight-scroll-and-screenshot-cleanup`

## Why

来自真实使用反馈（线上导出评审 `page-reviews-20260714-1228.zip`）：

1. **高亮跟随失效（严重）**：同时使用「选中元素」和「框定视图」后，滚动页面时只有当前模式的高亮会跟随，另一种高亮变成相对视口固定：
   - 处于元素模式时，框选区域不随滚动跟随文档位置
   - 处于框选模式时，已选元素的高亮框不随元素移动

   根因：`useElementSelection` 与 `useViewportBoxing` 的滚动监听都挂在 `isEnabled = active && mode === '<当前模式>'` 上，切换模式后另一个 hook 的 scroll 监听被移除，矩形不再刷新。

2. **截图包含评审 UI（严重）**：导出的 fullpage 截图里完整包含了评审工具栏、「添加评审意见」弹窗、遮罩高亮等评审工具自身 UI（见用户导出的截图），截图应当只呈现被评审的页面本身。

   根因：`captureScreenshots` 直接调用 `captureElement/captureViewport/captureFullPage`，截取时 `.rpr-review-overlay`（工具栏、弹窗、抽屉、高亮全部在其中）处于可见状态。

## What Changes

1. **滚动跟随与模式解耦**：两个 hook 中，scroll 监听与矩形刷新改为只依赖 `active`（评审激活即生效），不依赖当前 `mode`；mousemove/click/mousedown 等交互监听仍按模式门控。即：
   - 元素模式下滚动，框选区域照常跟随文档
   - 框选模式下滚动，元素高亮照常跟随元素
2. **截图前隐藏评审 UI**：`captureScreenshots` 执行期间将 `.rpr-review-overlay` 设为 `display: none`，等待一帧后截取，结束后在 `finally` 中恢复。覆盖三种截图类型（选中目标 / 当前视口 / 完整页面）。

## Impact

- **代码**：`src/hooks/useElementSelection.js`、`src/hooks/useViewportBoxing.js`、`src/ReviewTool.jsx`
- **行为**：混合模式下两种高亮始终正确跟随；所有导出截图不再包含评审工具自身 UI
- **无破坏性变更**：hook 对外 API 不变；无头使用者如需相同行为可参照实现

## 验证

- react-test-app 端到端新增用例：
  - 元素选中 + 框选共存，元素模式下滚动，断言框选区域位置随滚动更新
  - 框选模式下滚动，断言元素高亮位置随滚动更新
  - 勾选三种截图并导出 ZIP，解码截图断言其中不含评审弹窗/工具栏像素特征（或用 DOM 断言：截取瞬间 overlay 为 display:none）
- 既有 22 项 e2e 全部保持通过
