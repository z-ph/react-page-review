# react-page-review

一个 React 页面评审工具，支持元素选择、框定视图、截图、localStorage 持久化以及 Markdown / JSON / ZIP 导出。零 UI 框架依赖。

## 特性

- 元素评审：悬停高亮，点击标注
- 视口评审：拖拽框选区域
- 多选与框选调整：支持 Ctrl/Cmd 多选、调整大小
- 截图：可选选中目标、当前视口、完整页面
- 可拖动工具栏与评审弹窗
- localStorage 持久化
- 导出：JSON / Markdown / ZIP（含截图）
- 无额外 UI 组件库依赖（使用原生 React 元素 + 自定义样式）

## 安装

```bash
npm install react-page-review
```

Peer dependencies：

```bash
npm install react react-dom
```

## 使用

```jsx
import { useState } from 'react'
import { ReviewTool } from 'react-page-review'
import 'react-page-review/style.css'

function App() {
  const [active, setActive] = useState(false)

  return (
    <>
      <button onClick={() => setActive(true)}>开始评审</button>
      <ReviewTool active={active} onActiveChange={setActive} pagePath="/dashboard" />
    </>
  )
}
```

## Props

| Prop | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `active` | `boolean` | `false` | 控制评审浮层显示 |
| `pagePath` | `string` | 当前路径 | 页面标识，用于分组评审 |
| `pageName` | `string` | `pagePath` | 页面显示名称 |
| `storageKey` | `string` | `'page-reviews'` | localStorage 键名 |
| `enableComponentTree` | `boolean` | `true` | 是否显示组件树按钮 |
| `enableZipExport` | `boolean` | `true` | 是否启用 ZIP 导出 |
| `imageUploadUrl` | `string` | - | 截图上传图床地址 |
| `onActiveChange` | `(active: boolean) => void` | - | 浮层打开/关闭回调 |
| `onAdd` / `onUpdate` / `onDelete` / `onClear` / `onExport` | `function` | - | 事件回调 |

## Hook

```js
import { usePageReview } from 'react-page-review'

const { reviews, addReview, exportToJSON, exportToZIP } = usePageReview({
  storageKey: 'my-reviews'
})
```

## 详细文档

- [使用对接文档](./docs/usage.md)
- [原理与实现](./docs/principle.md)

## 英文文档

见 [`README.md`](./README.md) / [`usage.en.md`](./docs/usage.en.md) / [`principle.en.md`](./docs/principle.en.md)。

## 相关

- [vue-page-review](https://github.com/z-ph/vue-page-review) — Vue 版本
- [bidding-prototype](https://github.com/z-ph/bidding-prototype) — 使用 Vue 版本的示例项目

## License

MIT
