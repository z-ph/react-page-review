# Proposal: 导出无头 SDK（inspector / screenshot 工具函数）

## Change ID

`export-headless-sdk`

## Why

宿主项目（bidding-prototype）希望不使用 `ReviewTool` 内置 UI，而是基于 SDK 自行封装符合自身设计体系（Ant Design）的评审组件。目前包只导出 `ReviewTool` 和 `usePageReview`，而元素检查（`inspector.js`）与截图（`screenshot.js`）能力被锁在 `ReviewTool.jsx` 内部，宿主无法复用，只能复制源码。

## What Changes

1. 在 `src/index.jsx` 增加命名导出：
   - `inspector.js`：`getNodeInfo`、`getCssSelector`、`getXPath`、`getAriaInfo`、`getTestId`、`getComponentTree`
   - `screenshot.js`：`captureElement`、`captureViewport`、`captureFullPage`、`captureBox`、`generateScreenshotFilename`、`SCREENSHOT_TYPES`
2. 不修改这些函数的实现，仅改变导出面。
3. 版本号升至 0.6.0（新增 API，向后兼容）。

## Impact

- **代码**：`src/index.jsx`、`package.json`（version）
- **对外 API**：新增命名导出；`ReviewTool`、`usePageReview` 保持不变，无破坏性变更。
- **体积**：无新增依赖（`html-to-image`、`jszip` 已是 dependencies）。

## 验证

- 构建后 `dist/` 产物包含新增导出。
- 在宿主项目中 `import { getNodeInfo, captureElement, usePageReview } from 'react-page-review'` 可用。
