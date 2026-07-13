# Fix Review UI Self-Selection

## 问题

点击评审工具栏的「导出」按钮或其下拉菜单项时，评审工具可能误把评审 UI 自身当作页面元素选中。用户希望点击评审组件自身的按钮时只触发按钮功能，不要开启元素选择。

根本原因是：
1. `getSafeTarget` 仅排除 `.review-overlay` 内部的元素。
2. 捕获阶段的全局点击监听在按钮自身逻辑之前执行，若目标判断不严谨会误触发选中。

## 目标

确保评审工具栏、下拉菜单、弹窗、抽屉等所有评审 UI 元素都不会被元素选择或框选模式选中。

## 方案

1. 扩展 `getSafeTarget`：排除 `.review-overlay` 内部元素，同时排除自定义下拉菜单 `.dropdown-menu` 等 UI 元素。
2. 扩展框选模式的 `onMouseDown`：同样排除上述 UI 元素，避免在 UI 上开始框选。
3. 元素选择事件仅在确认目标为页面元素后才调用 `preventDefault` / `stopPropagation`。

## 影响范围

- `src/ReviewTool.jsx`：`getSafeTarget`、`onMouseDown` 的排除逻辑
- 版本号提升
