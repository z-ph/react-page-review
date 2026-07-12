import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { usePageReview } from './useReview.js'
import {
  SCREENSHOT_TYPES,
  generateScreenshotFilename,
  captureElement,
  captureViewport,
  captureFullPage,
  captureBox,
  uploadScreenshot
} from './screenshot.js'
import { getComponentTree, getNodeInfo } from './inspector.js'

export default function ReviewTool({
  active = false,
  pagePath = '',
  pageName = '',
  storageKey = 'page-reviews',
  imageUpload,
  enableZipExport = true,
  enableComponentTree = true,
  onActiveChange,
  onAdd,
  onUpdate,
  onDelete,
  onClear,
  onExport
}) {
  const resolvedPagePath = useMemo(() => {
    return pagePath || (typeof window !== 'undefined' ? window.location.pathname + window.location.search : '/')
  }, [pagePath])

  const {
    reviews,
    getPageReviews,
    addReview,
    updateReview,
    deleteReview,
    clearPageReviews,
    exportToJSON,
    exportToMarkdown,
    exportToZIP
  } = usePageReview({ storageKey, defaultPagePath: () => resolvedPagePath })

  const pageReviews = useMemo(() => getPageReviews(resolvedPagePath), [getPageReviews, resolvedPagePath, reviews])

  const [mode, setMode] = useState('element')
  const [formVisible, setFormVisible] = useState(false)
  const [listVisible, setListVisible] = useState(false)
  const [treeVisible, setTreeVisible] = useState(false)

  const [hoveredRect, setHoveredRect] = useState(null)
  const [hoveredTag, setHoveredTag] = useState('')
  const [selectedElement, setSelectedElement] = useState(null)
  const [treeHoverRect, setTreeHoverRect] = useState(null)
  const [componentTree, setComponentTree] = useState(null)

  const [dragRect, setDragRect] = useState(null)
  const isDragging = useRef(false)
  const dragStartRef = useRef({ x: 0, y: 0 })

  const [toolbarPos, setToolbarPos] = useState({ x: 0, y: 0 })
  const isDraggingToolbar = useRef(false)
  const toolbarDragStartRef = useRef({ x: 0, y: 0 })

  const [form, setForm] = useState({
    type: 'element',
    title: '',
    severity: 'medium',
    suggestion: '',
    selector: '',
    elementText: '',
    elementRect: null,
    viewportRect: null,
    viewport: { width: 0, height: 0 },
    scroll: { x: 0, y: 0 },
    pagePath: '',
    pageUrl: '',
    pageName: '',
    componentTree: null,
    aria: null,
    locators: null
  })

  const [selectedScreenshots, setSelectedScreenshots] = useState([])
  const [confirm, setConfirm] = useState(null)

  const canSubmit = form.title.trim() && form.suggestion.trim()

  const close = useCallback(() => {
    onActiveChange?.(false)
  }, [onActiveChange])

  const captureEnv = useCallback(() => ({
    viewport: { width: window.innerWidth, height: window.innerHeight },
    scroll: { x: window.scrollX, y: window.scrollY },
    pagePath: resolvedPagePath,
    pageUrl: window.location.href,
    pageName: pageName || resolvedPagePath
  }), [resolvedPagePath, pageName])

  const getElementSelector = useCallback((el) => {
    if (el.id) return '#' + el.id
    if (el.className) {
      const classes = String(el.className).split(/\s+/).filter(c => c && !c.startsWith('el-')).slice(0, 2)
      if (classes.length) return el.tagName.toLowerCase() + '.' + classes.join('.')
    }
    let path = []
    let node = el
    while (node && node !== document.body) {
      let name = node.tagName.toLowerCase()
      if (node.id) {
        name += '#' + node.id
        path.unshift(name)
        break
      }
      const siblings = Array.from(node.parentNode?.children || [])
      const same = siblings.filter(s => s.tagName === node.tagName)
      if (same.length > 1) {
        const idx = same.indexOf(node) + 1
        name += `:nth-of-type(${idx})`
      }
      path.unshift(name)
      node = node.parentNode
    }
    return path.join(' > ')
  }, [])

  const getSafeTarget = useCallback((e) => {
    const target = document.elementFromPoint(e.clientX, e.clientY)
    if (!target) return null
    if (target.closest('.review-overlay')) return null
    return target
  }, [])

  const availableScreenshotOptions = useMemo(() => {
    if (form.type === 'element') {
      return [
        { value: SCREENSHOT_TYPES.ELEMENT, label: '选中元素' },
        { value: SCREENSHOT_TYPES.VIEWPORT, label: '当前视口' },
        { value: SCREENSHOT_TYPES.FULL_PAGE, label: '完整页面' }
      ]
    }
    return [
      { value: SCREENSHOT_TYPES.BOX, label: '框选区域' },
      { value: SCREENSHOT_TYPES.VIEWPORT, label: '当前视口' },
      { value: SCREENSHOT_TYPES.FULL_PAGE, label: '完整页面' }
    ]
  }, [form.type])

  const captureScreenshots = useCallback(async () => {
    const screenshots = []
    for (const type of selectedScreenshots) {
      let dataUrl = null
      if (type === SCREENSHOT_TYPES.ELEMENT && selectedElement?.el) {
        dataUrl = await captureElement(selectedElement.el)
      } else if (type === SCREENSHOT_TYPES.BOX && form.viewportRect) {
        dataUrl = await captureBox(form.viewportRect)
      } else if (type === SCREENSHOT_TYPES.VIEWPORT) {
        dataUrl = await captureViewport()
      } else if (type === SCREENSHOT_TYPES.FULL_PAGE) {
        dataUrl = await captureFullPage()
      }

      if (dataUrl) {
        const filename = generateScreenshotFilename(type)
        let url = null
        if (imageUpload) {
          url = await uploadScreenshot(dataUrl, filename, imageUpload)
        }
        screenshots.push({
          type,
          filename,
          data: url ? undefined : dataUrl,
          url: url || undefined
        })
      }
    }
    return screenshots
  }, [selectedScreenshots, selectedElement, form.viewportRect, imageUpload])

  const buildLocators = useCallback((nodeInfo) => {
    const locators = {}
    if (nodeInfo.selector) locators.cssSelector = nodeInfo.selector
    if (nodeInfo.xpath) locators.xpath = nodeInfo.xpath
    if (nodeInfo.aria && Object.keys(nodeInfo.aria).length) locators.aria = nodeInfo.aria
    if (nodeInfo.testId) locators.testId = nodeInfo.testId
    return Object.keys(locators).length ? locators : null
  }, [])

  const openForm = useCallback((type, viewportRect = null) => {
    const env = captureEnv()
    const nodeInfo = selectedElement?.el ? getNodeInfo(selectedElement.el) : null
    const locators = nodeInfo ? buildLocators(nodeInfo) : null
    setForm({
      type,
      title: '',
      severity: 'medium',
      suggestion: '',
      selector: selectedElement?.selector || '',
      elementText: selectedElement?.text || '',
      elementRect: selectedElement?.rect || null,
      viewportRect,
      viewport: env.viewport,
      scroll: env.scroll,
      pagePath: env.pagePath,
      pageUrl: env.pageUrl,
      pageName: env.pageName,
      componentTree,
      aria: nodeInfo?.aria || null,
      locators
    })
    setSelectedScreenshots([])
    setFormVisible(true)
  }, [captureEnv, selectedElement, componentTree, buildLocators])

  const resetForm = useCallback(() => {
    setSelectedElement(null)
    setDragRect(null)
    setTreeHoverRect(null)
    setComponentTree(null)
    setSelectedScreenshots([])
    setForm({
      type: 'element',
      title: '',
      severity: 'medium',
      suggestion: '',
      selector: '',
      elementText: '',
      elementRect: null,
      viewportRect: null,
      viewport: { width: 0, height: 0 },
      scroll: { x: 0, y: 0 },
      pagePath: '',
      pageUrl: '',
      pageName: '',
      componentTree: null,
      aria: null,
      locators: null
    })
  }, [])

  const submitReview = useCallback(async () => {
    if (!canSubmit) return
    const screenshots = await captureScreenshots()
    const record = addReview({
      type: form.type,
      title: form.title.trim(),
      severity: form.severity,
      suggestion: form.suggestion.trim(),
      selector: form.selector,
      elementText: form.elementText,
      elementRect: form.elementRect,
      viewportRect: form.viewportRect,
      viewport: form.viewport,
      scroll: form.scroll,
      pagePath: form.pagePath,
      pageUrl: form.pageUrl,
      pageName: form.pageName,
      status: 'open',
      screenshots,
      componentTree: form.componentTree,
      aria: form.aria,
      locators: form.locators
    })
    setFormVisible(false)
    onAdd?.(record)
  }, [canSubmit, captureScreenshots, form, addReview, onAdd])

  const resolve = useCallback((id) => {
    updateReview(id, { status: 'resolved' })
    onUpdate?.({ id, status: 'resolved' })
  }, [updateReview, onUpdate])

  const remove = useCallback((id) => {
    setConfirm({
      title: '删除确认',
      message: '确定删除这条评审意见吗？',
      onConfirm: () => {
        deleteReview(id)
        onDelete?.({ id })
        setConfirm(null)
      }
    })
  }, [deleteReview, onDelete])

  const clearPage = useCallback(() => {
    if (pageReviews.length === 0) return
    setConfirm({
      title: '清空确认',
      message: '确定清空当前页面的所有评审意见吗？',
      onConfirm: () => {
        clearPageReviews(resolvedPagePath)
        onClear?.({ pagePath: resolvedPagePath })
        setConfirm(null)
      }
    })
  }, [pageReviews.length, clearPageReviews, resolvedPagePath, onClear])

  const handleExportJSON = useCallback(() => {
    exportToJSON()
    onExport?.({ format: 'json' })
  }, [exportToJSON, onExport])

  const handleExportMarkdown = useCallback(() => {
    exportToMarkdown()
    onExport?.({ format: 'markdown' })
  }, [exportToMarkdown, onExport])

  const handleExportZIP = useCallback(async () => {
    await exportToZIP()
    onExport?.({ format: 'zip' })
  }, [exportToZIP, onExport])

  const onTreeNodeHover = useCallback((node) => {
    if (!node.rect) {
      setTreeHoverRect(null)
      return
    }
    setTreeHoverRect(node.rect)
  }, [])

  const onTreeNodeSelect = useCallback((node) => {
    if (!node.selector) return
    const el = document.querySelector(node.selector)
    if (!el) return
    const rect = el.getBoundingClientRect()
    setSelectedElement({
      el,
      selector: node.selector,
      tag: el.tagName.toLowerCase(),
      text: el.innerText?.slice(0, 40) || '',
      rect: {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height
      }
    })
    setComponentTree(getComponentTree(el))
    setTreeVisible(false)
    openForm('element')
  }, [openForm])

  const onMouseMove = useCallback((e) => {
    if (isDraggingToolbar.current) return
    if (mode !== 'element' || formVisible || isDragging.current) return
    const target = getSafeTarget(e)
    if (!target) {
      setHoveredRect(null)
      return
    }
    const rect = target.getBoundingClientRect()
    setHoveredRect({
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY,
      width: rect.width,
      height: rect.height
    })
    setHoveredTag(target.tagName.toLowerCase())
  }, [mode, formVisible, getSafeTarget])

  const onMouseOut = useCallback(() => {
    setHoveredRect(null)
  }, [])

  const onElementClick = useCallback((e) => {
    if (mode !== 'element' || formVisible || isDragging.current) return
    const target = getSafeTarget(e)
    if (!target) return
    e.preventDefault()
    e.stopPropagation()
    const rect = target.getBoundingClientRect()
    setSelectedElement({
      el: target,
      selector: getElementSelector(target),
      tag: target.tagName.toLowerCase(),
      text: target.innerText?.slice(0, 40) || '',
      rect: {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height
      }
    })
    setComponentTree(getComponentTree(target))
    openForm('element')
  }, [mode, formVisible, getSafeTarget, getElementSelector, openForm])

  const onMouseDown = useCallback((e) => {
    if (isDraggingToolbar.current) return
    if (mode !== 'viewport' || formVisible) return
    isDragging.current = true
    dragStartRef.current = { x: e.clientX + window.scrollX, y: e.clientY + window.scrollY }
    setDragRect({ x: dragStartRef.current.x, y: dragStartRef.current.y, width: 0, height: 0 })
  }, [mode, formVisible])

  const onMouseMoveDrag = useCallback((e) => {
    if (isDraggingToolbar.current) return
    if (!isDragging.current) return
    const x = e.clientX + window.scrollX
    const y = e.clientY + window.scrollY
    setDragRect({
      x: Math.min(dragStartRef.current.x, x),
      y: Math.min(dragStartRef.current.y, y),
      width: Math.abs(x - dragStartRef.current.x),
      height: Math.abs(y - dragStartRef.current.y)
    })
  }, [])

  const onMouseUp = useCallback((e) => {
    if (isDraggingToolbar.current) {
      isDraggingToolbar.current = false
      return
    }
    if (!isDragging.current) return
    isDragging.current = false
    setDragRect(prev => {
      if (prev && prev.width > 10 && prev.height > 10) {
        openForm('viewport', { ...prev })
      }
      return null
    })
  }, [openForm])

  const onToolbarMouseDown = useCallback((e) => {
    const isDragHandle = e.target.classList?.contains('toolbar-title') || e.target.classList?.contains('review-toolbar')
    if (!isDragHandle) return
    isDraggingToolbar.current = true
    toolbarDragStartRef.current = {
      x: e.clientX - toolbarPos.x,
      y: e.clientY - toolbarPos.y
    }
  }, [toolbarPos])

  const onToolbarMouseMove = useCallback((e) => {
    if (!isDraggingToolbar.current) return
    setToolbarPos({
      x: e.clientX - toolbarDragStartRef.current.x,
      y: e.clientY - toolbarDragStartRef.current.y
    })
  }, [])

  const onKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      if (formVisible) setFormVisible(false)
      else close()
    }
  }, [formVisible, close])

  useEffect(() => {
    if (!active) return
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseout', onMouseOut)
    document.addEventListener('click', onElementClick, true)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mousemove', onMouseMoveDrag)
    document.addEventListener('mousemove', onToolbarMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseout', onMouseOut)
      document.removeEventListener('click', onElementClick, true)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mousemove', onMouseMoveDrag)
      document.removeEventListener('mousemove', onToolbarMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [active, onMouseMove, onMouseOut, onElementClick, onMouseDown, onMouseMoveDrag, onToolbarMouseMove, onMouseUp, onKeyDown])

  useEffect(() => {
    if (active) {
      setMode('element')
    } else {
      resetForm()
      setHoveredRect(null)
      setListVisible(false)
      setTreeVisible(false)
    }
  }, [active, resetForm])

  if (!active) return null

  const toolbarStyle = {
    transform: `translate(calc(-50% + ${toolbarPos.x}px), ${toolbarPos.y}px)`
  }

  const effectiveBoxRect = dragRect || (form.type === 'viewport' && formVisible ? form.viewportRect : null)

  return createPortal(
    <div className="review-overlay" onClick={(e) => e.stopPropagation()}>
      <div
        className={`review-toolbar ${isDraggingToolbar.current ? 'is-dragging' : ''}`}
        style={toolbarStyle}
        onMouseDown={onToolbarMouseDown}
      >
        <div className="toolbar-left">
          <span className="toolbar-title" title="按住此处可拖动">页面评审模式</span>
          <div className="radio-group">
            <button className={mode === 'element' ? 'active' : ''} onClick={() => setMode('element')}>选择元素</button>
            <button className={mode === 'viewport' ? 'active' : ''} onClick={() => setMode('viewport')}>框定视图</button>
          </div>
        </div>
        <div className="toolbar-right">
          {enableComponentTree && <button onClick={() => setTreeVisible(true)}>组件树</button>}
          <button className="badge-btn" onClick={() => setListVisible(true)}>
            评审列表 <span className="badge">{pageReviews.length}</span>
          </button>
          <div className="dropdown">
            <button className="primary" onClick={handleExportMarkdown}>导出</button>
            <div className="dropdown-menu">
              <div onClick={handleExportMarkdown}>导出为 Markdown</div>
              <div onClick={handleExportJSON}>导出为 JSON</div>
              {enableZipExport && <div onClick={handleExportZIP}>导出为 ZIP</div>}
            </div>
          </div>
          <button className="danger" onClick={close}>退出评审</button>
        </div>
      </div>

      {hoveredRect && mode === 'element' && !formVisible && (
        <div className="highlight-box hover-box" style={highlightStyle(hoveredRect)}>
          <span className="highlight-label">{hoveredTag}</span>
        </div>
      )}

      {selectedElement && mode === 'element' && (
        <div className="highlight-box selected-box" style={highlightStyle(selectedElement.rect)}>
          <span className="highlight-label">已选：{selectedElement.tag}</span>
        </div>
      )}

      {treeHoverRect && (
        <div className="highlight-box tree-hover-box" style={highlightStyle(treeHoverRect)} />
      )}

      {effectiveBoxRect && (
        <div className="drag-rect" style={dragRectStyle(effectiveBoxRect)} />
      )}

      {formVisible && (
        <div className="modal-backdrop" onClick={() => setFormVisible(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">添加评审意见</div>
            <div className="modal-body">
              <div className="form-row">
                <label>评审位置</label>
                <div className="review-target-info">
                  <span className="tag">{form.type === 'element' ? '元素' : '视图范围'}</span>
                  <span className="target-desc">
                    {form.type === 'element'
                      ? (form.elementText || form.selector)
                      : `框选区域 x=${form.viewportRect?.x}, y=${form.viewportRect?.y}, w=${form.viewportRect?.width}, h=${form.viewportRect?.height}`}
                  </span>
                </div>
              </div>
              <div className="form-row">
                <label>窗口尺寸</label>
                <span className="text-muted">{form.viewport?.width} × {form.viewport?.height}</span>
              </div>
              <div className="form-row">
                <label>滚动位置</label>
                <span className="text-muted">x={form.scroll?.x}, y={form.scroll?.y}</span>
              </div>
              <div className="form-row">
                <label>截图</label>
                <div className="checkbox-group">
                  {availableScreenshotOptions.map(opt => (
                    <label key={opt.value} className="checkbox-label">
                      <input
                        type="checkbox"
                        value={opt.value}
                        checked={selectedScreenshots.includes(opt.value)}
                        onChange={(e) => {
                          const value = e.target.value
                          setSelectedScreenshots(prev =>
                            prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
                          )
                        }}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-row">
                <label>标题 <span className="required">*</span></label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="例如：按钮样式不统一"
                />
              </div>
              <div className="form-row">
                <label>严重等级 <span className="required">*</span></label>
                <div className="radio-group">
                  {['low', 'medium', 'high', 'critical'].map(s => (
                    <label key={s} className="radio-label">
                      <input
                        type="radio"
                        name="severity"
                        value={s}
                        checked={form.severity === s}
                        onChange={() => setForm({ ...form, severity: s })}
                      />
                      {severityText(s)}
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-row">
                <label>评审建议 <span className="required">*</span></label>
                <textarea
                  rows={4}
                  value={form.suggestion}
                  onChange={(e) => setForm({ ...form, suggestion: e.target.value })}
                  placeholder="描述问题现象、影响和改进建议"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={() => setFormVisible(false)}>取消</button>
              <button className="primary" disabled={!canSubmit} onClick={submitReview}>保存评审</button>
            </div>
          </div>
        </div>
      )}

      {treeVisible && (
        <>
          <div className="drawer-backdrop" onClick={() => setTreeVisible(false)} />
          <div className="drawer">
            <div className="drawer-header">
              <span>组件树检查器</span>
              <button className="close" onClick={() => setTreeVisible(false)}>×</button>
            </div>
            <div className="drawer-body">
              {!componentTree ? (
                <div className="empty">先选择一个元素以查看组件树</div>
              ) : (
                <div className="tree-panel">
                  {componentTree.framework && componentTree.framework.length > 0 && (
                    <div className="tree-section">
                      <h4>框架组件树</h4>
                      <div className="tree-list">
                        {componentTree.framework.map((node, idx) => (
                          <div
                            key={'fw-' + idx}
                            className="tree-node"
                            onMouseEnter={() => onTreeNodeHover(node)}
                            onMouseLeave={() => setTreeHoverRect(null)}
                            onClick={() => onTreeNodeSelect(node)}
                          >
                            <span className="node-name">{node.componentName}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="tree-section">
                    <h4>DOM 树</h4>
                    <div className="tree-list">
                      {componentTree.dom.map((node, idx) => (
                        <div
                          key={'dom-' + idx}
                          className="tree-node"
                          style={{ paddingLeft: idx * 12 }}
                          onMouseEnter={() => onTreeNodeHover(node)}
                          onMouseLeave={() => setTreeHoverRect(null)}
                          onClick={() => onTreeNodeSelect(node)}
                        >
                          <span className="node-tag">{node.tag}</span>
                          {node.id && <span className="node-id">#{node.id}</span>}
                          {node.aria?.role && <span className="node-aria">role={node.aria.role}</span>}
                          {node.testId && <span className="node-testid">testid={node.testId}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {listVisible && (
        <>
          <div className="drawer-backdrop" onClick={() => setListVisible(false)} />
          <div className="drawer">
            <div className="drawer-header">
              <span>当前页面评审意见</span>
              <button className="close" onClick={() => setListVisible(false)}>×</button>
            </div>
            <div className="drawer-body">
              <div className="review-list-actions">
                <button className="primary" onClick={handleExportMarkdown}>导出 Markdown</button>
                <button onClick={handleExportJSON}>导出 JSON</button>
                {enableZipExport && <button onClick={handleExportZIP}>导出 ZIP</button>}
                <button className="danger-text" onClick={clearPage}>清空本页</button>
              </div>
              {pageReviews.length === 0 ? (
                <div className="empty">暂无评审意见</div>
              ) : (
                <div className="review-list">
                  {pageReviews.map(item => (
                    <div key={item.id} className="review-item">
                      <div className="review-item-header">
                        <span className="review-item-title">{item.title}</span>
                        <div className="review-item-tags">
                          <span className={`tag ${severityType(item.severity)}`}>{severityText(item.severity)}</span>
                          <span className="tag info">{item.type === 'element' ? '元素' : '视图'}</span>
                          {item.componentTree?.dom?.length > 0 && <span className="tag success">树</span>}
                        </div>
                      </div>
                      <p className="review-item-target">
                        {item.type === 'element' ? (item.elementText || item.selector) : `框选 x=${item.viewportRect.x}, y=${item.viewportRect.y}`}
                      </p>
                      <p className="review-item-suggestion">{item.suggestion}</p>
                      <div className="review-item-meta">
                        <span className="text-muted">{new Date(item.createdAt).toLocaleString()}</span>
                        <div className="review-item-actions">
                          {item.status !== 'resolved' && <button className="link primary" onClick={() => resolve(item.id)}>标记解决</button>}
                          <button className="link danger" onClick={() => remove(item.id)}>删除</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {confirm && (
        <div className="modal-backdrop" onClick={() => setConfirm(null)}>
          <div className="modal confirm-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">{confirm.title}</div>
            <div className="modal-body">{confirm.message}</div>
            <div className="modal-footer">
              <button onClick={() => setConfirm(null)}>取消</button>
              <button className="danger" onClick={confirm.onConfirm}>确定</button>
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  )
}

function highlightStyle(rect) {
  if (!rect) return {}
  return {
    left: rect.x + 'px',
    top: rect.y + 'px',
    width: rect.width + 'px',
    height: rect.height + 'px'
  }
}

function dragRectStyle(rect) {
  if (!rect) return {}
  return {
    left: rect.x + 'px',
    top: rect.y + 'px',
    width: rect.width + 'px',
    height: rect.height + 'px'
  }
}

function severityType(s) {
  const map = { low: 'info', medium: 'warning', high: 'danger', critical: 'danger' }
  return map[s] || 'info'
}

function severityText(s) {
  const map = { low: '低', medium: '中', high: '高', critical: '严重' }
  return map[s] || s
}
