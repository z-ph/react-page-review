# Proposal: add-antd-and-headless-sdk

## Why

`react-page-review` currently uses native elements with custom CSS. While it avoids UI-framework lock-in, the UX is rough:

- Export dropdown opens on hover and closes when the mouse moves away.
- Toolbar buttons consume too much horizontal space.
- The package exports screenshot/inspector utilities but no interaction hooks, so building a custom UI still requires reimplementing selection, boxing, drag, and resize logic.

We want to adopt Ant Design for the default UI (with on-demand import) while exposing headless hooks that users can reuse in custom interfaces.

## What Changes

### UI layer

- Add `antd` as an **optional peer dependency** with on-demand import.
- Replace hover-triggered export dropdown with a click-triggered `Dropdown` from antd.
- Group secondary toolbar actions into a single dropdown menu to save space:
  - Primary buttons: 选择元素 / 框定视图, 评审(N), 退出评审
  - Dropdown menu: 组件树, 评审列表, 导出 Markdown/JSON/ZIP, 取消选择
- Keep modal and drawer draggable/resizable.

### SDK / headless hooks

Export new hooks from `src/hooks/`:

- `useElementSelection` — hover detection, click selection, Ctrl/Cmd multi-select, scroll-following highlight rects.
- `useViewportBoxing` — drag to create boxes, 8-direction resize, multi-box.
- `useDragResize` — generic drag and resize for floating panels.

`ReviewTool.jsx` becomes a default UI implementation that reuses these hooks. Users can import hooks directly to build custom UIs.

## Impact

- **Specs**: `specs/ui` (UI behavior), `specs/sdk` (public API)
- **Code**: `src/ReviewTool.jsx`, `src/index.jsx`, new files under `src/hooks/`
- **Dependencies**: add `antd` as optional peer dependency
- **Breaking**: none for existing `ReviewTool` users; new exports are additive
- **Build**: bundle size may increase slightly due to antd tree-shaken imports

## Risks

- antd default styles may conflict with host app; keep review overlay scoped.
- Headless hooks must remain independent of the data layer.
