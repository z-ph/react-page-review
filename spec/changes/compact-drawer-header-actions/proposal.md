# Proposal: 评审列表抽屉头部操作收敛为下拉菜单

## Change ID

`compact-drawer-header-actions`

## Why

评审列表抽屉头部（extra）直接平铺了 4 个按钮：导出 Markdown、导出 JSON、导出 ZIP、清空本页。问题：

1. **关闭按钮不可点（功能 bug）**：在 antd v5 宿主（如 bidding-prototype，antd 5.29.3）中，Drawer 的 `size` 不支持数字（v5 仅支持 `default`/`large`，数字是 v6 才加的），宽度退化为默认 378px。头部 4 个按钮挤压布局，`.ant-drawer-extra` 覆盖住关闭按钮，用户无法正常关闭抽屉（bidding 端到端测试 2.8 实测复现）。
2. **违反既定 UX 原则**：工具栏已按「次要操作收进『更多』下拉，不要一股脑塞按钮」的原则改造，抽屉头部应保持一致。

## What Changes

1. 评审列表抽屉头部的 4 个按钮收敛为单个「操作」下拉菜单（click 触发，不用 hover）：导出 Markdown、导出 JSON、导出 ZIP、（分隔线）清空本页（danger）。
2. 各操作的触发逻辑（导出格式、清空确认弹窗）完全不变。
3. 组件树抽屉无头部操作，不涉及。

## Impact

- **代码**：`src/ReviewTool.jsx`
- **行为**：抽屉头部只显示一个「操作」按钮，点击展开菜单；关闭按钮始终可点。
- **无破坏性变更**：对外 props/emit 不变。

## 验证

- react-test-app 端到端：抽屉头部下拉可打开、4 项齐全、导出 JSON/Markdown/ZIP 正常、清空确认正常、关闭按钮可点击关闭。
- bidding-prototype（antd v5 宿主）端到端：test-page-review-core.cjs 全量通过（重点 2.8 抽屉关闭、8.1/8.2 导出）。
