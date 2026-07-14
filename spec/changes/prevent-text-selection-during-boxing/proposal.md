# Proposal: 框选/调整框选期间禁止页面文字选中

## Change ID

`prevent-text-selection-during-boxing`

## Why

真实使用反馈：在「框定视图」模式下拖拽创建框选区域、或拖拽手柄调整已有框选范围时，会触发浏览器原生文字选中，页面上留下一片文字选区，干扰操作且影响截图美观。

根因分析（`src/hooks/useViewportBoxing.js`）：

1. **调整尺寸路径完全未防御**：`startResize`（`:54`）只调用了 `e.stopPropagation()`，没有 `e.preventDefault()`；调整期间的 `onMouseMove` 也没有阻止默认行为，拖动经过文本时浏览器原生选区随之产生。
2. **创建拖拽路径防御不足**：`onMouseDown`（`:70`）虽有 `e.preventDefault()`，但 `onMouseMove` 拖拽过程中未持续阻止默认行为；一旦选区因任何路径开始（如从手柄、边缘元素起拖），移动过程会扩展选区。

## What Changes

1. **拖拽期间禁止文字选中**：拖拽创建框选或调整框选尺寸期间，将 `document.body` 的 `user-select` 设为 `none`（保存原值），`mouseup`/拖拽结束/组件卸载时恢复。这是拖拽类库的通用做法，覆盖所有鼠标路径。
2. **事件层防御**：`startResize` 增加 `e.preventDefault()`；`onMouseMove` 在拖拽/调整进行中调用 `e.preventDefault()`。
3. 仅限拖拽进行期间生效，不影响评审模式下正常的页面交互与表单输入。

## Impact

- **代码**：`src/hooks/useViewportBoxing.js`
- **行为**：框选创建与调整尺寸过程中页面文字不再被选中；拖拽结束后页面文字 selectable 状态恢复原样
- **无破坏性变更**：hook 对外 API 不变

## 验证

- react-test-app 端到端新增用例：
  - 进入框选模式，在含文字的卡片区域上拖拽创建框选，断言 `window.getSelection().toString()` 为空
  - 拖拽调整已有框选的手柄，断言 `window.getSelection().toString()` 为空
  - 拖拽结束后，验证 `document.body.style.userSelect` 已恢复（不为 'none'）
- 既有 e2e 全部保持通过
