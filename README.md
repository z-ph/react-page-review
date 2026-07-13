# react-page-review

> 一个 React 页面评审工具，支持元素选择、框定视图、截图、localStorage 持久化以及 Markdown / JSON / ZIP 导出。零 UI 框架依赖。
>
> A React page review tool for collecting UI feedback through element selection, viewport boxing, screenshots, localStorage persistence, and Markdown / JSON / ZIP export. Zero UI framework dependency.

## 特性 / Features

- 元素评审：悬停高亮，点击标注 / Element review: hover to highlight, click to annotate
- 视口评审：拖拽框选区域 / Viewport review: drag to box a region
- 多选与框选调整：支持 Ctrl/Cmd 多选、调整大小 / Multi-select and box resizing with Ctrl/Cmd
- 截图：可选选中目标、当前视口、完整页面 / Screenshots: target, viewport, full page
- 可拖动工具栏与评审弹窗 / Draggable toolbar and review modal
- localStorage 持久化 / localStorage persistence
- 导出：JSON / Markdown / ZIP（含截图）/ Export to JSON / Markdown / ZIP (with screenshots)
- 零 UI 框架依赖 / Zero UI framework dependency

## 安装 / Install

```bash
npm install react-page-review
```

Peer dependencies:

```bash
npm install react react-dom
```

## 使用 / Usage

```jsx
import { useState } from 'react'
import { ReviewTool } from 'react-page-review'
import 'react-page-review/style.css'

function App() {
  const [active, setActive] = useState(false)

  return (
    <>
      <button onClick={() => setActive(true)}>开始评审 / Start Review</button>
      <ReviewTool active={active} onActiveChange={setActive} pagePath="/dashboard" />
    </>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `active` | `boolean` | `false` | 控制评审浮层显示 / Controls review overlay visibility |
| `pagePath` | `string` | current path | 页面标识，用于分组评审 / Page identifier for grouping reviews |
| `pageName` | `string` | `pagePath` | 页面显示名称 / Display name of the page |
| `storageKey` | `string` | `'page-reviews'` | localStorage 键名 / localStorage key |
| `enableComponentTree` | `boolean` | `true` | 是否显示组件树按钮 / Show component tree button |
| `enableZipExport` | `boolean` | `true` | 是否启用 ZIP 导出 / Enable ZIP export |
| `imageUploadUrl` | `string` | - | 截图上传图床地址 / Image upload endpoint |
| `onActiveChange` | `(active: boolean) => void` | - | 浮层打开/关闭回调 / Callback when overlay opens/closes |
| `onAdd` / `onUpdate` / `onDelete` / `onClear` / `onExport` | `function` | - | 事件回调 / Event callbacks |

## Hook

```js
import { usePageReview } from 'react-page-review'

const { reviews, addReview, exportToJSON, exportToZIP } = usePageReview({
  storageKey: 'my-reviews'
})
```

## 相关 / Related

- [vue-page-review](https://github.com/z-ph/vue-page-review) — Vue 版本 / Vue version
- [bidding-prototype](https://github.com/z-ph/bidding-prototype) — 使用 Vue 版本的示例项目 / Example project using the Vue version

## License

MIT
