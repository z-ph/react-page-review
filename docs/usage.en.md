# react-page-review Usage & Integration Guide

`react-page-review` is a React 18 library for collecting UI review feedback on a page. It ships with a ready-to-use `ReviewTool` component and a standalone core hook `usePageReview` for building custom review UIs.

---

## Table of Contents

1. [Installation and Peer Dependencies](#installation-and-peer-dependencies)
2. [Basic Integration with the ReviewTool Component](#basic-integration-with-the-reviewtool-component)
3. [Advanced Integration with usePageReview](#advanced-integration-with-usepagereview)
4. [Complete Props Reference](#complete-props-reference)
5. [Callbacks / Events](#callbacks--events)
6. [Screenshot Options](#screenshot-options)
7. [Export Formats](#export-formats)
8. [Image Upload Configuration](#image-upload-configuration)
9. [Customizing Styles](#customizing-styles)
10. [React 18 Notes](#react-18-notes)
11. [Minimal Runnable Example](#minimal-runnable-example)

---

## Installation and Peer Dependencies

### Install

```bash
# pnpm
pnpm add react-page-review

# npm
npm install react-page-review

# yarn
yarn add react-page-review
```

### Peer Dependencies

`react-page-review` requires a React 18 environment:

```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0"
}
```

If you use the default `ReviewTool` UI, also install the optional peer dependency `antd` (≥6.0.0). The library imports only the antd components it needs.

### Import Styles

The component relies on its bundled CSS. Import it in your entry file or page:

```js
import 'react-page-review/style.css'
```

### Runtime Dependencies

The library bundles `html-to-image` and `jszip` internally, so no extra installation is needed.

---

## Basic Integration with the ReviewTool Component

The simplest integration is to mount `ReviewTool` and control review mode with `active` and `onActiveChange`.

```jsx
import { useState } from 'react'
import ReviewTool from 'react-page-review'
import 'react-page-review/style.css'

function App() {
  const [active, setActive] = useState(false)

  return (
    <div>
      <button onClick={() => setActive(true)}>Enter Review Mode</button>
      <ReviewTool active={active} onActiveChange={setActive} pageName="Home" />
    </div>
  )
}
```

### Interaction Overview

1. Click "Enter Review Mode" to show the floating review toolbar.
2. Toggle between **Select Element** and **Box Viewport** modes.
3. After selecting targets, click **Review (N)** to open the form.
4. Fill in title, severity, and suggestion, then save.
5. Saved reviews are grouped by page path and can be viewed, exported, or deleted from the review list drawer.

---

## Advanced Integration with usePageReview

If you need a fully custom UI, use the core hook `usePageReview` directly.

```js
import { usePageReview } from 'react-page-review'

const {
  reviews,              // React state of all review records
  allReviews,           // () => reviews
  getPageReviews,       // (pagePath?) => records for the page
  addReview,            // (payload) => record
  updateReview,         // (id, updates) => void
  deleteReview,         // (id) => void
  clearPageReviews,     // (pagePath?) => void
  clearAllReviews,      // () => void
  exportToJSON,         // () => void
  exportToMarkdown,     // () => void
  exportToZIP           // async () => void
} = usePageReview({
  storageKey: 'page-reviews',
  defaultPagePath: () => window.location.pathname + window.location.search
})
```

### Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `storageKey` | `string` | `'page-reviews'` | localStorage key name |
| `defaultPagePath` | `() => string` | `() => window.location.pathname + window.location.search` | Default page path |

### State and Methods

- `reviews`: React state array of all review records.
- `allReviews()`: returns current `reviews`.
- `getPageReviews(pagePath?)`: filters records by page path.

### CRUD Operations

- `addReview(payload)`: adds a record and auto-generates `id` and `createdAt`.
- `updateReview(id, updates)`: merges updates into the target record.
- `deleteReview(id)`: deletes the record.
- `clearPageReviews(pagePath?)`: clears records for a page.
- `clearAllReviews()`: clears all records.

### Exports

- `exportToJSON()`: downloads `page-reviews-YYYYMMDD-HHMM.json`.
- `exportToMarkdown()`: downloads a Markdown report.
- `exportToZIP()`: asynchronously downloads a ZIP containing JSON, Markdown, and screenshots.

> **Note**: `screenshot.js` and `inspector.js` are internal utilities used by `ReviewTool` and are **not** exported from the public entry. If you build a fully custom UI, use `html-to-image` directly for screenshots.

---

## Headless Interaction Hooks

If `usePageReview` is not enough and you want to reuse the low-level selection, boxing, drag, and resize logic, import the headless hooks directly:

```js
import {
  useElementSelection,
  useViewportBoxing,
  useDragResize
} from 'react-page-review'

function CustomReviewOverlay({ active, mode }) {
  const onIgnoreTarget = (target) => !!target.closest('.review-overlay')

  const selection = useElementSelection({
    active: active && mode === 'element',
    mode,
    onIgnoreTarget
  })

  const boxing = useViewportBoxing({
    active: active && mode === 'viewport',
    mode,
    onIgnoreTarget,
    onBoxCreate: (box, e) => console.log('box created', box)
  })

  const panel = useDragResize({
    initialPosition: { x: 0, y: 0 },
    initialSize: { width: 400, height: null },
    isDragHandle: (target) => target.classList.contains('my-panel-header')
  })

  return (
    <div className="review-overlay">
      {selection.hoveredRect && (
        <div
          className="highlight-box hover-box"
          style={{
            left: selection.hoveredRect.x,
            top: selection.hoveredRect.y,
            width: selection.hoveredRect.width,
            height: selection.hoveredRect.height
          }}
        />
      )}
      {selection.selectedElements.map((item) => (
        <div
          key={item.selector}
          className="highlight-box selected-box"
          style={{
            left: item.rect.x,
            top: item.rect.y,
            width: item.rect.width,
            height: item.rect.height
          }}
        />
      ))}
      {boxing.selectedBoxes.map((box) => (
        <div
          key={box.id}
          className="drag-rect selected-box"
          style={{
            left: boxing.toViewportRect(box.rect).x,
            top: boxing.toViewportRect(box.rect).y,
            width: box.rect.width,
            height: box.rect.height
          }}
        />
      ))}
      <div
        className="my-panel"
        style={{
          left: `calc(50% + ${panel.position.x}px)`,
          top: `calc(50% + ${panel.position.y}px)`,
          width: panel.size.width
        }}
        onMouseDown={panel.onDragStart}
      >
        <div className="my-panel-header">Draggable Panel</div>
        <div className="panel-resize-handle" onMouseDown={panel.onResizeStart} />
      </div>
    </div>
  )
}
```

### Hook APIs

| Hook | Purpose | Key returned values |
| --- | --- | --- |
| `useElementSelection({ active, mode, onIgnoreTarget })` | Element hover / selection | `hoveredRect`, `hoveredTag`, `selectedElements`, `selectElement`, `removeSelectedElement`, `clearSelectedElements` |
| `useViewportBoxing({ active, mode, onIgnoreTarget, onBoxCreate })` | Viewport boxing | `selectedBoxes`, `dragRect`, `resizingBoxId`, `removeBox`, `clearBoxes`, `startResize`, `toViewportRect` |
| `useDragResize({ initialPosition, initialSize, isDragHandle, minWidth, minHeight, measureRef })` | Panel drag / resize | `position`, `size`, `isDragging`, `isResizing`, `onDragStart`, `onResizeStart` |

These hooks do **not** depend on `usePageReview`; they only manage interaction state and can be combined with any data layer.

---

## Complete Props Reference

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `active` | `boolean` | `false` | No | Whether review mode is active. |
| `pagePath` | `string` | `''` | No | Current page path. Falls back to `window.location.pathname + window.location.search` if empty. |
| `pageName` | `string` | `''` | No | Page name used in reports. Falls back to `pagePath` if empty. |
| `storageKey` | `string` | `'page-reviews'` | No | localStorage key name. |
| `imageUpload` | `(blob: Blob, filename: string) => Promise<string>` | `undefined` | No | Custom screenshot upload function returning an image URL. |
| `enableZipExport` | `boolean` | `true` | No | Whether to show the ZIP export option. |
| `enableComponentTree` | `boolean` | `true` | No | Whether to show the component tree button and drawer. |

> React does **not** provide an `imageUploadUrl` prop; use `imageUpload` instead.

---

## Callbacks / Events

| Callback | When It Fires | Payload |
| --- | --- | --- |
| `onActiveChange` | When the user clicks "Exit" or presses `Esc` to close review mode | `boolean` |
| `onAdd` | After a review record is saved | Full review record object |
| `onUpdate` | After a review is marked resolved | `{ id, status: 'resolved' }` |
| `onDelete` | After a single review is deleted | `{ id }` |
| `onClear` | After all reviews on the current page are cleared | `{ pagePath }` |
| `onExport` | After JSON / Markdown / ZIP export completes | `{ format: 'json' \| 'markdown' \| 'zip' }` |

### Example

```jsx
<ReviewTool
  active={active}
  onActiveChange={setActive}
  pageName="Product Detail"
  onAdd={(record) => console.log('added', record)}
  onUpdate={({ id }) => console.log('resolved', id)}
  onDelete={({ id }) => console.log('deleted', id)}
  onExport={({ format }) => console.log('exported', format)}
/>
```

---

## Screenshot Options

The review form lets users choose the following screenshot types:

| Option | Internal Constant | Description |
| --- | --- | --- |
| Selected targets | `SCREENSHOT_TYPES.TARGETS` | Capture each selected element or boxed area. Elements use `captureElement`; boxes use `captureBox`. |
| Current viewport | `SCREENSHOT_TYPES.VIEWPORT` | Capture the visible browser viewport using `captureViewport`. |
| Full page | `SCREENSHOT_TYPES.FULL_PAGE` | Capture the entire scrollable page using `captureFullPage`. |

Screenshots are stored as an array in the record's `screenshots` field:

```ts
{
  type: 'element' | 'viewport' | 'fullpage',
  filename: string,
  data?: string,   // base64 data URL when not uploaded
  url?: string     // remote URL after upload
}
```

---

## Export Formats

### JSON

`exportToJSON` produces:

```json
{
  "exportTime": "2026-07-13T05:59:47.373Z",
  "total": 2,
  "reviews": [
    {
      "id": "rv-...",
      "type": "element",
      "title": "...",
      "severity": "high",
      "suggestion": "...",
      "targets": [...],
      "viewport": { "width": 1920, "height": 1080 },
      "scroll": { "x": 0, "y": 200 },
      "pagePath": "/dashboard",
      "pageUrl": "https://example.com/dashboard",
      "pageName": "Dashboard",
      "status": "open",
      "screenshots": [...],
      "createdAt": "2026-07-13T05:59:47.373Z"
    }
  ]
}
```

### Markdown

`exportToMarkdown` groups records by `pagePath`:

```markdown
# 页面评审报告

导出时间：2026/7/13 13:59:47
评审总数：2

## 页面：/dashboard

### 1. 按钮样式不统一
- **严重等级**：高
- **状态**：待处理
- **窗口尺寸**：1920 × 1080
- **滚动位置**：x=0, y=200
- **评审目标数**：1
  - 目标 1（元素）：`.btn.primary` x=..., y=..., w=..., h=...
- **评审建议**：建议统一主按钮颜色。
- **创建时间**：2026/7/13 13:59:47

#### 截图
![element](images/screenshot-element-....png)
```

### ZIP

`exportToZIP` creates a ZIP archive with this structure:

```
page-reviews-YYYYMMDD-HHMM.zip
├── review.json          // report JSON; screenshots reference images/
├── review.md            // Markdown report
└── images/
    ├── screenshot-element-....png
    └── screenshot-fullpage-....png
```

If a screenshot has already been uploaded (`url` present), JSON/Markdown reference the remote URL and the image is not bundled as base64.

---

## Image Upload Configuration

React only supports the function-style `imageUpload` prop.

```jsx
async function uploadImage(blob, filename) {
  const formData = new FormData()
  formData.append('file', blob, filename)
  const res = await fetch('/api/upload', { method: 'POST', body: formData })
  if (!res.ok) throw new Error('upload failed')
  const data = await res.json()
  return data.url
}

<ReviewTool active={active} onActiveChange={setActive} imageUpload={uploadImage} />
```

The upload function must return an image URL. On success, the screenshot record keeps only the `url`; base64 data is discarded. If no upload function is provided, screenshots are stored as base64 `data:` URLs.

---

## Customizing Styles

Default styles are provided by `react-page-review/style.css`. Override the class names in your own CSS.

### Commonly Overridden Classes

| Class | Description |
| --- | --- |
| `.review-overlay` | Review overlay root, `pointer-events: none`, z-index 9000 |
| `.review-toolbar` | Top floating toolbar, z-index 10000 |
| `.highlight-box` / `.selected-box` / `.hover-box` | Element highlight boxes |
| `.drag-rect` | Box-selection areas |
| `.resize-handle` | Eight resize handles on box selections |
| `.review-modal` | Review form modal, z-index 10002 |
| `.drawer` | Right-side drawer, z-index 10003 |

React button class names differ slightly from the Vue version. Common ones are `button.primary`, `button.danger`, `button.danger-text`, `badge-btn`, and `toolbar-btn`.

### Example: Theme Override

```css
.review-toolbar {
  background: #1a1a1a;
  color: #fff;
}

.highlight-box.selected-box {
  border-color: #ff5722;
  background: rgba(255, 87, 34, 0.12);
}
```

---

## React 18 Notes

1. **Portal**: `ReviewTool` renders via `createPortal(..., document.body)` so it is not affected by parent layout or `overflow` styles.
2. **Event Listeners**: when `active` is true, the component attaches `mousemove`, `click`, `mousedown`, `mouseup`, `keydown`, and `scroll` listeners to `document` through `useEffect`; they are removed when review mode closes or the component unmounts.
3. **Hook Dependencies**: event callbacks are memoized with `useCallback` and declare proper dependency arrays to avoid duplicate bindings.
4. **Confirm Dialog**: delete and clear actions use an in-component confirmation modal (`confirm` state) instead of the browser's `window.confirm`.
5. **SSR Safe**: all `window` / `document` access is guarded by environment checks, so server-side rendering will not throw.

---

## Minimal Runnable Example

```jsx
// App.jsx
import { useState } from 'react'
import ReviewTool from 'react-page-review'
import 'react-page-review/style.css'

function App() {
  const [active, setActive] = useState(false)

  const upload = async (blob, filename) => {
    // Example: return a local object URL. In production, upload to your CDN.
    return URL.createObjectURL(blob)
  }

  function onAdd(record) {
    console.log('added review', record)
  }

  return (
    <div className="app">
      <h1>My Page</h1>
      <button onClick={() => setActive(true)}>Enter Review Mode</button>

      <ReviewTool
        active={active}
        onActiveChange={setActive}
        pageName="My Page"
        pagePath="/demo"
        imageUpload={upload}
        onAdd={onAdd}
      />
    </div>
  )
}

export default App
```

Click the button to enter review mode, select page elements, fill out the form, and export the report.
