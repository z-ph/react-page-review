# react-page-review

A React page review tool for collecting UI feedback through element selection, viewport boxing, screenshots, localStorage persistence, and Markdown / JSON / ZIP export. Zero UI framework dependency.

## Features

- Element review: hover to highlight, click to annotate
- Viewport review: drag to box a region
- Multi-select and box resizing with Ctrl/Cmd
- Screenshots: target, viewport, full page
- Draggable toolbar and review modal
- localStorage persistence
- Export to JSON / Markdown / ZIP (with screenshots)
- Optional Ant Design peer dependency for the default UI (on-demand import)
- Headless interaction hooks for custom UI integrations

## Install

```bash
npm install react-page-review
```

Peer dependencies:

```bash
npm install react react-dom
```

If you use the default `ReviewTool` UI, also install the optional peer dependency:

```bash
npm install antd
```

## Usage

```jsx
import { useState } from 'react'
import { ReviewTool } from 'react-page-review'
function App() {
  const [active, setActive] = useState(false)

  return (
    <>
      <button onClick={() => setActive(true)}>Start Review</button>
      <ReviewTool active={active} onActiveChange={setActive} pagePath="/dashboard" />
    </>
  )
}
```

> **Note:** Styles are injected automatically when `ReviewTool` mounts. The manual `import 'react-page-review/style.css'` is now optional and kept only for backward compatibility or for overriding styles.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `active` | `boolean` | `false` | Controls review overlay visibility |
| `pagePath` | `string` | current path | Page identifier for grouping reviews |
| `pageName` | `string` | `pagePath` | Display name of the page |
| `storageKey` | `string` | `'page-reviews'` | localStorage key |
| `enableComponentTree` | `boolean` | `true` | Show component tree button |
| `enableZipExport` | `boolean` | `true` | Enable ZIP export |
| `imageUploadUrl` | `string` | - | Image upload endpoint |
| `onActiveChange` | `(active: boolean) => void` | - | Callback when overlay opens/closes |
| `onAdd` / `onUpdate` / `onDelete` / `onClear` / `onExport` | `function` | - | Event callbacks |

## Hook

```js
import { usePageReview } from 'react-page-review'

const { reviews, addReview, exportToJSON, exportToZIP } = usePageReview({
  storageKey: 'my-reviews'
})
```

## Headless Interaction Hooks

The following hooks can be used independently to build a custom review UI:

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

- `useElementSelection` — hover detection, click selection, Ctrl/Cmd multi-select, and scroll-following highlight rects.
- `useViewportBoxing` — drag-to-create boxes, 8-direction resize, and multi-box support.
- `useDragResize` — generic drag and resize for floating panels (toolbar, modal, drawer).

## Chinese Documentation

See [`README.zh-CN.md`](./README.zh-CN.md).

## Detailed Documentation

- [Usage Guide](./docs/usage.en.md)
- [Principle & Implementation](./docs/principle.en.md)

## Related

- [vue-page-review](https://github.com/z-ph/vue-page-review) — Vue version
- [bidding-prototype](https://github.com/z-ph/bidding-prototype) — Example project using the Vue version

## License

MIT
