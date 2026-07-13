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
  const [selectedElements, setSelectedElements] = useState([])
  const [selectedBoxes, setSelectedBoxes] = useState([])
  const boxCounterRef = useRef(0)

  const [treeHoverRect, setTreeHoverRect] = useState(null)
  const [componentTree, setComponentTree] = useState(null)

  const [scrollPos, setScrollPos] = useState({ x: window.scrollX, y: window.scrollY })

  const [dragRect, setDragRect] = useState(null)
  const isDraggingBoxRef = useRef(false)
  const dragStartRef = useRef({ x: 0, y: 0 })

  const [resizingBoxId, setResizingBoxId] = useState(null)
  const resizeHandleRef = useRef('')
  const resizeStartRef = useRef({ x: 0, y: 0, rect: null })

  const [toolbarPos, setToolbarPos] = useState({ x: 0, y: 0 })
  const [toolbarSize, setToolbarSize] = useState({ width: null, height: null })
  const isDraggingToolbarRef = useRef(false)
  const toolbarDragStartRef = useRef({ x: 0, y: 0 })
  const isResizingToolbarRef = useRef(false)
  const toolbarResizeStartRef = useRef({ x: 0, y: 0, width: 0, height: 0 })

  const [modalPos, setModalPos] = useState({ x: 0, y: 0 })
  const [modalSize, setModalSize] = useState({ width: 560, height: null })
  const isDraggingModalRef = useRef(false)
  const modalDragStartRef = useRef({ x: 0, y: 0 })
  const isResizingModalRef = useRef(false)
  const modalResizeStartRef = useRef({ x: 0, y: 0, width: 0, height: 0 })

  const [selectedScreenshots, setSelectedScreenshots] = useState([])
  const [confirm, setConfirm] = useState(null)

  const [form, setForm] = useState({
    type: 'element',
    title: '',
    severity: 'medium',
    suggestion: '',
    targets: [],
    viewport: { width: 0, height: 0 },
    scroll: { x: 0, y: 0 },
    pagePath: '',
    pageUrl: '',
    pageName: '',
    aria: null,
    locators: null
  })

  const selectedCount = selectedElements.length + selectedBoxes.length
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

  const toViewportRect = useCallback((rect) => {
    if (!rect) return null
    return {
      x: rect.x - scrollPos.x,
      y: rect.y - scrollPos.y,
      width: rect.width,
      height: rect.height
    }
  }, [scrollPos])

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
    const target = e.target
    if (!target || !(target instanceof Element)) return null
    if (target.closest('.review-overlay')) return null
    if (target.closest('.dropdown-menu')) return null
    if (target.closest('.modal')) return null
    if (target.closest('.drawer')) return null
    return target
  }, [])

  const isMultiSelectKey = useCallback((e) => e.ctrlKey || e.metaKey, [])

  const buildLocators = useCallback((nodeInfo) => {
    const locators = {}
    if (nodeInfo.selector) locators.cssSelector = nodeInfo.selector
    if (nodeInfo.xpath) locators.xpath = nodeInfo.xpath
    if (nodeInfo.aria && Object.keys(nodeInfo.aria).length) locators.aria = nodeInfo.aria
    if (nodeInfo.testId) locators.testId = nodeInfo.testId
    return Object.keys(locators).length ? locators : null
  }, [])

  const buildTargets = useCallback(() => {
    const targets = []
    selectedElements.forEach(item => {
      const nodeInfo = item.el ? getNodeInfo(item.el) : null
      targets.push({
        type: 'element',
        selector: item.selector,
        elementText: item.text,
        elementRect: item.docRect || item.rect,
        componentTree: nodeInfo ? getComponentTree(item.el) : null,
        aria: nodeInfo?.aria || null,
        locators: nodeInfo ? buildLocators(nodeInfo) : null
      })
    })
    selectedBoxes.forEach(box => {
      targets.push({
        type: 'viewport',
        viewportRect: box.rect
      })
    })
    return targets
  }, [selectedElements, selectedBoxes, buildLocators])

  const resetForm = useCallback(() => {
    setSelectedScreenshots([])
    setForm({
      type: 'element',
      title: '',
      severity: 'medium',
      suggestion: '',
      targets: [],
      viewport: { width: 0, height: 0 },
      scroll: { x: 0, y: 0 },
      pagePath: '',
      pageUrl: '',
      pageName: '',
      aria: null,
      locators: null
    })
  }, [])

  const clearAllSelections = useCallback(() => {
    setSelectedElements([])
    setSelectedBoxes([])
    setComponentTree(null)
    setDragRect(null)
  }, [])

  const openReviewForm = useCallback(() => {
    const env = captureEnv()
    const targets = buildTargets()
    const firstElement = selectedElements[0]
    const nodeInfo = firstElement?.el ? getNodeInfo(firstElement.el) : null

    setForm({
      type: selectedElements.length > 0 ? 'element' : 'viewport',
      title: '',
      severity: 'medium',
      suggestion: '',
      targets,
      viewport: env.viewport,
      scroll: env.scroll,
      pagePath: env.pagePath,
      pageUrl: env.pageUrl,
      pageName: env.pageName,
      aria: nodeInfo?.aria || null,
      locators: nodeInfo ? buildLocators(nodeInfo) : null
    })
    setSelectedScreenshots([])
    setFormVisible(true)
  }, [captureEnv, buildTargets, selectedElements, buildLocators])

  const captureScreenshots = useCallback(async () => {
    const screenshots = []
    for (const type of selectedScreenshots) {
      if (type === SCREENSHOT_TYPES.TARGETS) {
        for (const target of form.targets) {
          let dataUrl = null
          if (target.type === 'element' && target.elementRect) {
            const el = document.querySelector(target.selector)
            if (el) dataUrl = await captureElement(el)
          } else if (target.type === 'viewport' && target.viewportRect) {
            dataUrl = await captureBox(target.viewportRect)
          }
          if (dataUrl) {
            const filename = generateScreenshotFilename(target.type)
            let url = null
            if (imageUpload) url = await uploadScreenshot(dataUrl, filename, imageUpload)
            screenshots.push({ type: target.type, filename, data: url ? undefined : dataUrl, url: url || undefined })
          }
        }
      } else if (type === SCREENSHOT_TYPES.VIEWPORT) {
        const dataUrl = await captureViewport()
        if (dataUrl) {
          const filename = generateScreenshotFilename(SCREENSHOT_TYPES.VIEWPORT)
          let url = null
          if (imageUpload) url = await uploadScreenshot(dataUrl, filename, imageUpload)
          screenshots.push({ type: SCREENSHOT_TYPES.VIEWPORT, filename, data: url ? undefined : dataUrl, url: url || undefined })
        }
      } else if (type === SCREENSHOT_TYPES.FULL_PAGE) {
        const dataUrl = await captureFullPage()
        if (dataUrl) {
          const filename = generateScreenshotFilename(SCREENSHOT_TYPES.FULL_PAGE)
          let url = null
          if (imageUpload) url = await uploadScreenshot(dataUrl, filename, imageUpload)
          screenshots.push({ type: SCREENSHOT_TYPES.FULL_PAGE, filename, data: url ? undefined : dataUrl, url: url || undefined })
        }
      }
    }
    return screenshots
  }, [selectedScreenshots, form.targets, imageUpload])

  const submitReview = useCallback(async () => {
    if (!canSubmit) return
    const screenshots = await captureScreenshots()
    const record = addReview({
      type: form.type,
      title: form.title.trim(),
      severity: form.severity,
      suggestion: form.suggestion.trim(),
      targets: form.targets,
      viewport: form.viewport,
      scroll: form.scroll,
      pagePath: form.pagePath,
      pageUrl: form.pageUrl,
      pageName: form.pageName,
      status: 'open',
      screenshots,
      aria: form.aria,
      locators: form.locators
    })
    setFormVisible(false)
    clearAllSelections()
    onAdd?.(record)
  }, [canSubmit, captureScreenshots, form, addReview, clearAllSelections, onAdd])

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
    setSelectedElements([{
      el,
      selector: node.selector,
      tag: el.tagName.toLowerCase(),
      text: el.innerText?.slice(0, 40) || '',
      rect: {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      },
      docRect: {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height
      }
    }])
    setSelectedBoxes([])
    setComponentTree(getComponentTree(el))
    setTreeVisible(false)
  }, [])

  const removeSelectedElement = useCallback((item) => {
    setSelectedElements(prev => {
      const next = prev.filter(s => s.el !== item.el)
      if (next.length === 0) setComponentTree(null)
      return next
    })
  }, [])

  const removeSelectedBox = useCallback((box) => {
    setSelectedBoxes(prev => {
      const next = prev.filter(b => b.id !== box.id)
      next.forEach((b, idx) => { b.index = idx })
      return next
    })
  }, [])

  const onSelectedElementClick = useCallback((item, e) => {
    if (!isMultiSelectKey(e)) return
    e.stopPropagation()
    removeSelectedElement(item)
  }, [isMultiSelectKey, removeSelectedElement])

  const onBoxMouseDown = useCallback((box, e) => {
    if (!isMultiSelectKey(e)) return
    e.stopPropagation()
    removeSelectedBox(box)
  }, [isMultiSelectKey, removeSelectedBox])

  const onMouseMove = useCallback((e) => {
    if (isDraggingToolbarRef.current) return
    if (resizingBoxId) return
    if (mode !== 'element' || formVisible || isDraggingBoxRef.current) return
    const target = getSafeTarget(e)
    if (!target) {
      setHoveredRect(null)
      return
    }
    const rect = target.getBoundingClientRect()
    setHoveredRect({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height
    })
    setHoveredTag(target.tagName.toLowerCase())
  }, [mode, formVisible, resizingBoxId, getSafeTarget])

  const onMouseOut = useCallback(() => {
    setHoveredRect(null)
  }, [])

  const onElementClick = useCallback((e) => {
    if (mode !== 'element' || formVisible || isDraggingBoxRef.current || resizingBoxId) return
    const target = getSafeTarget(e)
    if (!target) return
    e.preventDefault()
    e.stopPropagation()

    const rect = target.getBoundingClientRect()
    const item = {
      el: target,
      selector: getElementSelector(target),
      tag: target.tagName.toLowerCase(),
      text: target.innerText?.slice(0, 40) || '',
      rect: {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      },
      docRect: {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height
      }
    }

    if (isMultiSelectKey(e)) {
      setSelectedElements(prev => {
        const idx = prev.findIndex(s => s.el === target)
        if (idx > -1) {
          const next = prev.filter((_, i) => i !== idx)
          if (next.length === 0) setComponentTree(null)
          return next
        }
        return [...prev, item]
      })
    } else {
      setSelectedElements([item])
      setSelectedBoxes([])
      setComponentTree(getComponentTree(target))
    }
  }, [mode, formVisible, resizingBoxId, getSafeTarget, getElementSelector, isMultiSelectKey])

  const onMouseDown = useCallback((e) => {
    if (isDraggingToolbarRef.current) return
    if (mode !== 'viewport' || formVisible || resizingBoxId) return
    if (!getSafeTarget(e)) return
    e.preventDefault()
    isDraggingBoxRef.current = true
    dragStartRef.current = { x: e.clientX, y: e.clientY }
    setDragRect({ x: dragStartRef.current.x, y: dragStartRef.current.y, width: 0, height: 0 })
  }, [mode, formVisible, resizingBoxId, getSafeTarget])

  const onResizeMove = useCallback((e) => {
    if (!resizingBoxId || !resizeStartRef.current.rect) return
    const dx = e.clientX + window.scrollX - resizeStartRef.current.x
    const dy = e.clientY + window.scrollY - resizeStartRef.current.y
    const orig = resizeStartRef.current.rect

    setSelectedBoxes(prev => {
      const box = prev.find(b => b.id === resizingBoxId)
      if (!box) return prev
      let { x, y, width, height } = orig
      if (resizeHandleRef.current.includes('e')) width = Math.max(10, orig.width + dx)
      if (resizeHandleRef.current.includes('s')) height = Math.max(10, orig.height + dy)
      if (resizeHandleRef.current.includes('w')) {
        width = Math.max(10, orig.width - dx)
        x = orig.x + (orig.width - width)
      }
      if (resizeHandleRef.current.includes('n')) {
        height = Math.max(10, orig.height - dy)
        y = orig.y + (orig.height - height)
      }
      return prev.map(b => b.id === resizingBoxId ? { ...b, rect: { x, y, width, height } } : b)
    })
  }, [resizingBoxId])

  const onMouseMoveDrag = useCallback((e) => {
    if (isDraggingToolbarRef.current) return
    if (resizingBoxId) {
      onResizeMove(e)
      return
    }
    if (!isDraggingBoxRef.current) return
    const x = e.clientX
    const y = e.clientY
    setDragRect({
      x: Math.min(dragStartRef.current.x, x),
      y: Math.min(dragStartRef.current.y, y),
      width: Math.abs(x - dragStartRef.current.x),
      height: Math.abs(y - dragStartRef.current.y)
    })
  }, [resizingBoxId, onResizeMove])

  const onMouseUp = useCallback((e) => {
    if (isDraggingToolbarRef.current) {
      isDraggingToolbarRef.current = false
      return
    }
    if (isResizingToolbarRef.current) {
      isResizingToolbarRef.current = false
      return
    }
    if (isDraggingModalRef.current) {
      isDraggingModalRef.current = false
      return
    }
    if (isResizingModalRef.current) {
      isResizingModalRef.current = false
      return
    }
    if (resizingBoxId) {
      setResizingBoxId(null)
      resizeHandleRef.current = ''
      resizeStartRef.current = { x: 0, y: 0, rect: null }
      return
    }
    if (!isDraggingBoxRef.current) return
    isDraggingBoxRef.current = false
    setDragRect(prev => {
      if (prev && prev.width > 10 && prev.height > 10) {
        if (!isMultiSelectKey(e)) {
          setSelectedElements([])
        }
        setSelectedBoxes(boxes => {
          const next = [...boxes, {
            id: 'box-' + Date.now() + '-' + boxCounterRef.current++,
            index: boxes.length,
            rect: {
              x: prev.x + window.scrollX,
              y: prev.y + window.scrollY,
              width: prev.width,
              height: prev.height
            }
          }]
          return next
        })
      }
      return null
    })
  }, [resizingBoxId, isMultiSelectKey])

  const onResizeStart = useCallback((box, position, e) => {
    setResizingBoxId(box.id)
    resizeHandleRef.current = position
    resizeStartRef.current = {
      x: e.clientX + window.scrollX,
      y: e.clientY + window.scrollY,
      rect: { ...box.rect }
    }
  }, [])

  const onToolbarMouseDown = useCallback((e) => {
    const isDragHandle = e.target.classList?.contains('toolbar-title') || e.target.classList?.contains('review-toolbar')
    if (!isDragHandle) return
    isDraggingToolbarRef.current = true
    toolbarDragStartRef.current = {
      x: e.clientX - toolbarPos.x,
      y: e.clientY - toolbarPos.y
    }
  }, [toolbarPos])

  const onToolbarMouseMove = useCallback((e) => {
    if (isDraggingToolbarRef.current) {
      setToolbarPos({
        x: e.clientX - toolbarDragStartRef.current.x,
        y: e.clientY - toolbarDragStartRef.current.y
      })
      return
    }
    if (isResizingToolbarRef.current) {
      const dx = e.clientX - toolbarResizeStartRef.current.x
      const dy = e.clientY - toolbarResizeStartRef.current.y
      setToolbarSize({
        width: Math.max(400, toolbarResizeStartRef.current.width + dx),
        height: Math.max(48, toolbarResizeStartRef.current.height + dy)
      })
    }
  }, [])

  const onToolbarResizeStart = useCallback((e) => {
    isResizingToolbarRef.current = true
    const toolbarEl = e.target.closest('.review-toolbar')
    const rect = toolbarEl?.getBoundingClientRect()
    toolbarResizeStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      width: rect?.width || 0,
      height: rect?.height || 0
    }
  }, [])

  const onModalHeaderMouseDown = useCallback((e) => {
    if (!e.target.classList?.contains('modal-header')) return
    isDraggingModalRef.current = true
    modalDragStartRef.current = {
      x: e.clientX - modalPos.x,
      y: e.clientY - modalPos.y
    }
  }, [modalPos])

  const onModalMouseMove = useCallback((e) => {
    if (isDraggingModalRef.current) {
      setModalPos({
        x: e.clientX - modalDragStartRef.current.x,
        y: e.clientY - modalDragStartRef.current.y
      })
    } else if (isResizingModalRef.current) {
      const dx = e.clientX - modalResizeStartRef.current.x
      const dy = e.clientY - modalResizeStartRef.current.y
      setModalSize({
        width: Math.max(360, modalResizeStartRef.current.width + dx),
        height: Math.max(300, modalResizeStartRef.current.height + dy)
      })
    }
  }, [])

  const onModalResizeStart = useCallback((e) => {
    isResizingModalRef.current = true
    modalResizeStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      width: modalSize.width,
      height: modalSize.height
    }
  }, [modalSize])

  const onKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      if (formVisible) setFormVisible(false)
      else close()
    }
  }, [formVisible, close])

  const handleOverlayClick = useCallback(() => {}, [])

  const openTreePanel = useCallback(() => {
    if (selectedElements.length === 0) {
      setComponentTree(null)
    }
    setTreeVisible(true)
  }, [selectedElements.length])

  useEffect(() => {
    if (!active) return
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseout', onMouseOut)
    document.addEventListener('click', onElementClick, true)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mousemove', onMouseMoveDrag)
    document.addEventListener('mousemove', onToolbarMouseMove)
    document.addEventListener('mousemove', onModalMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseout', onMouseOut)
      document.removeEventListener('click', onElementClick, true)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mousemove', onMouseMoveDrag)
      document.removeEventListener('mousemove', onToolbarMouseMove)
      document.removeEventListener('mousemove', onModalMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [active, onMouseMove, onMouseOut, onElementClick, onMouseDown, onMouseMoveDrag, onToolbarMouseMove, onModalMouseMove, onMouseUp, onKeyDown])

  useEffect(() => {
    if (!active) return
    const onScroll = () => {
      setScrollPos({ x: window.scrollX, y: window.scrollY })
      setSelectedElements(prev => prev.map(item => {
        const el = item.el || document.querySelector(item.selector)
        if (!el) return item
        const rect = el.getBoundingClientRect()
        return {
          ...item,
          el,
          rect: {
            x: rect.left,
            y: rect.top,
            width: rect.width,
            height: rect.height
          }
        }
      }))
    }
    window.addEventListener('scroll', onScroll, true)
    return () => window.removeEventListener('scroll', onScroll, true)
  }, [active])

  useEffect(() => {
    if (active) {
      setMode('element')
    } else {
      clearAllSelections()
      resetForm()
      setHoveredRect(null)
      setListVisible(false)
      setTreeVisible(false)
    }
  }, [active, clearAllSelections, resetForm])

  const toolbarStyle = {
    transform: `translate(calc(-50% + ${toolbarPos.x}px), ${toolbarPos.y}px)`
  }
  if (toolbarSize.width) toolbarStyle.width = toolbarSize.width + 'px'
  if (toolbarSize.height) toolbarStyle.height = toolbarSize.height + 'px'

  const modalStyle = {
    left: `calc(50% + ${modalPos.x}px)`,
    top: `calc(50% + ${modalPos.y}px)`,
    transform: 'translate(-50%, -50%)',
    width: modalSize.width + 'px'
  }
  if (modalSize.height) modalStyle.height = modalSize.height + 'px'

  const resizeHandlePositions = ['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']

  return createPortal(
    <div className="review-overlay" onClick={handleOverlayClick}>
      <div
        className={`review-toolbar ${isDraggingToolbarRef.current ? 'is-dragging' : ''}`}
        style={toolbarStyle}
        onClick={(e) => e.stopPropagation()}
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
          {enableComponentTree && <button onClick={openTreePanel}>组件树</button>}
          <button
            className="primary"
            disabled={selectedCount === 0}
            onClick={openReviewForm}
          >
            评审 ({selectedCount})
          </button>
          <button
            disabled={selectedCount === 0}
            onClick={clearAllSelections}
          >
            取消选择
          </button>
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
        <div className="toolbar-resize-handle" onMouseDown={onToolbarResizeStart} />
      </div>

      {hoveredRect && mode === 'element' && !isDraggingBoxRef.current && !resizingBoxId && (
        <div className="highlight-box hover-box" style={highlightStyle(hoveredRect)}>
          <span className="highlight-label">{hoveredTag}</span>
        </div>
      )}

      {selectedElements.map((item, idx) => (
        <div
          key={'el-' + idx}
          className="highlight-box selected-box"
          style={highlightStyle(item.rect)}
          onClick={(e) => onSelectedElementClick(item, e)}
        >
          <span className="highlight-label">
            {item.tag}
            <i className="remove-icon" onClick={(e) => { e.stopPropagation(); removeSelectedElement(item) }}>×</i>
          </span>
        </div>
      ))}

      {treeHoverRect && (
        <div className="highlight-box tree-hover-box" style={highlightStyle(toViewportRect(treeHoverRect))} />
      )}

      {selectedBoxes.map(box => (
        <div
          key={box.id}
          className={`drag-rect selected-box ${resizingBoxId === box.id ? 'is-resizing' : ''}`}
          style={boxStyle(toViewportRect(box.rect))}
          onMouseDown={(e) => onBoxMouseDown(box, e)}
        >
          <span className="box-label" onMouseDown={(e) => e.stopPropagation()}>
            框选 {box.index + 1}
            <i className="remove-icon" onClick={(e) => { e.stopPropagation(); removeSelectedBox(box) }}>×</i>
          </span>
          {resizeHandlePositions.map(position => (
            <div
              key={position}
              className={`resize-handle handle-${position}`}
              style={handleStyle(position, box.rect)}
              onMouseDown={(e) => onResizeStart(box, position, e)}
            />
          ))}
        </div>
      ))}

      {dragRect && (
        <div className="drag-rect preview-box" style={boxStyle(dragRect)} />
      )}

      {formVisible && (
        <div className="modal-backdrop" onClick={() => setFormVisible(false)} />
      )}

      {formVisible && (
        <div
          className={`modal review-modal ${isDraggingModalRef.current ? 'is-dragging' : ''}`}
          style={modalStyle}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header" onMouseDown={onModalHeaderMouseDown}>
            <span>添加评审意见</span>
            <button className="close" onClick={() => setFormVisible(false)}>×</button>
          </div>
          <div className="modal-body">
            <div className="form-row">
              <label>评审目标</label>
              <div className="review-targets-summary">
                {form.targets.map((target, idx) => (
                  <span key={idx} className="tag target-tag">
                    {target.type === 'element'
                      ? (target.elementText || target.selector || '元素')
                      : `框选 ${target.viewportRect?.x},${target.viewportRect?.y}`}
                  </span>
                ))}
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
                {[
                  { value: SCREENSHOT_TYPES.TARGETS, label: '选中目标' },
                  { value: SCREENSHOT_TYPES.VIEWPORT, label: '当前视口' },
                  { value: SCREENSHOT_TYPES.FULL_PAGE, label: '完整页面' }
                ].map(opt => (
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
          <div className="modal-resize-handle" onMouseDown={onModalResizeStart} />
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
                          <span className="tag info">{item.targets?.length || 1} 个目标</span>
                          {hasComponentTree(item) && <span className="tag success">树</span>}
                        </div>
                      </div>
                      <p className="review-item-target">{summarizeTargets(item.targets)}</p>
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

function boxStyle(rect) {
  if (!rect) return {}
  return {
    left: rect.x + 'px',
    top: rect.y + 'px',
    width: rect.width + 'px',
    height: rect.height + 'px'
  }
}

function handleStyle(position, rect) {
  const size = 8
  const styles = {}
  if (position.includes('n')) styles.top = -size / 2 + 'px'
  if (position.includes('s')) styles.bottom = -size / 2 + 'px'
  if (position.includes('w')) styles.left = -size / 2 + 'px'
  if (position.includes('e')) styles.right = -size / 2 + 'px'
  if (position === 'n' || position === 's') styles.left = rect.width / 2 - size / 2 + 'px'
  if (position === 'w' || position === 'e') styles.top = rect.height / 2 - size / 2 + 'px'
  styles.width = size + 'px'
  styles.height = size + 'px'
  return styles
}

function severityType(s) {
  const map = { low: 'info', medium: 'warning', high: 'danger', critical: 'danger' }
  return map[s] || 'info'
}

function severityText(s) {
  const map = { low: '低', medium: '中', high: '高', critical: '严重' }
  return map[s] || s
}

function hasComponentTree(item) {
  return item.targets?.some(t => t.componentTree?.dom?.length)
}

function summarizeTargets(targets) {
  if (!targets || targets.length === 0) return '无目标'
  const first = targets[0]
  const firstDesc = first.type === 'element'
    ? (first.elementText || first.selector || '元素')
    : `框选 x=${first.viewportRect.x}, y=${first.viewportRect.y}`
  if (targets.length === 1) return firstDesc
  return `${firstDesc} 等 ${targets.length} 个目标`
}
