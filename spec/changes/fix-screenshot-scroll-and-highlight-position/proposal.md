# Proposal: 修复截图滚动位置与高亮框位置

## Change ID

`fix-screenshot-scroll-and-highlight-position`

## Why

当前截图实现存在三个可用性问题：

1. **视口截图丢失滚动位置**：`captureViewport` 将 `<html>` 强制设为 `width/height=viewport` 且 `overflow:hidden`，导致截图始终从文档顶部开始，无法反映用户当前滚动位置。
2. **完整页面与视口截图顶部区域重叠**：由于视口截图回到顶部，当页面有滚动时，两者仅在截取范围上有差异，但视口截图内容等同于完整页面顶部区域，造成混淆。
3. **滚动时高亮框位置错误**：高亮框渲染在 `position: fixed` 的 `.rpr-review-overlay` 内。完整页面截图展开整个文档后，fixed 定位的高亮仍停留在当前视口区域，而不是目标元素在文档中的实际位置。

## What Changes

1. **统一截图基于文档坐标**：
   - 所有需要包含高亮的截图（当前视口、完整页面、框选区域）先展开整个文档。
   - 截图前将 `.rpr-review-overlay` 临时改为 `position: absolute`，并将所有高亮框/框选框从视口坐标转换为文档坐标。
   - 按目标区域裁剪：
     - 当前视口：裁剪到 `[scrollX, scrollY, innerWidth, innerHeight]`
     - 完整页面：裁剪到 `[0, 0, scrollWidth, scrollHeight]`
     - 框选区域：裁剪到框选矩形

2. **更新 `captureScreenshots`**：
   - 在隐藏评审 UI 之后、截图之前，调用高亮坐标转换。
   - 截图完成后在 `finally` 中恢复 overlay 和高亮框的原始样式。

3. **新增 e2e 断言**：
   - 在页面滚动后保存评审，断言完整页面截图高度大于视口高度。
   - 断言完整页面截图中 PNG 像素包含高亮框颜色特征（或至少截图尺寸正确且高亮未丢失）。
   - 断言当前视口截图高度等于视口高度，且顶部内容不是文档起始位置（证明保留了滚动）。

## Impact

- **代码**：`src/screenshot.js`、`src/ReviewTool.jsx`、`test-react-e2e.cjs`
- **行为**：当前视口截图正确反映滚动位置；完整页面截图包含全部滚动内容；高亮框在两种截图中均与目标对齐
- **无破坏性变更**：截图文件格式、评审记录数据结构不变

## 验证

- react-test-app 端到端用例新增滚动场景：
  - 滚动页面后保存评审并导出 ZIP，解码完整页面 PNG 断言高度大于视口
  - 断言当前视口 PNG 高度等于视口高度，且图像顶部对应滚动后的内容
  - 既有 38 项 e2e 全部保持通过
