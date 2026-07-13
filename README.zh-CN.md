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
- 可选 Ant Design peer dependency，默认 UI 按需引入
- 无头交互 hooks，可用于自定义评审界面

## 安装

```bash
npm install react-page-review
```

Peer dependencies：

```bash
npm install react react-dom
```

如果使用默认的 `ReviewTool` UI，还需安装可选 peer dependency：

```bash
npm install antd
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

## 无头交互 Hooks

以下 hooks 可以独立使用，用于构建自定义评审 UI：

```js
import {
  useElementSelection,
  useViewportBoxing,
  useDragResize
} from 'react-page-review'

const selection = useElementSelection({ active, mode: 'element', onIgnoreTarget })
const boxing = useViewportBoxing({ active, mode: 'viewport', onIgnoreTarget })
const panel = useDragResize({ initialPosition, initialSize, isDragHandle })
```

- `useElementSelection` — 悬停检测、点击选择、Ctrl/Cmd 多选、滚动跟随高亮框。
- `useViewportBoxing` — 拖拽创建框选、8 方向调整大小、多框选。
- `useDragResize` — 通用浮动面板拖拽与尺寸调整（工具栏、弹窗、抽屉）。

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
