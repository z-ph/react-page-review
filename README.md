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
- No additional UI component library dependency (uses native React elements with custom CSS)

## Install

```bash
npm install react-page-review
```

Peer dependencies:

```bash
npm install react react-dom
```

## Usage

```jsx
import { useState } from 'react'
import { ReviewTool } from 'react-page-review'
import 'react-page-review/style.css'

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
