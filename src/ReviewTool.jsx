import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { createPortal } from 'react-dom'
import {
  Button,
  Dropdown,
  Modal,
  Drawer,
  Radio,
  Checkbox,
  Input,
  Select,
  Tag,
  Badge,
  Card,
  Empty
} from 'antd'
import { usePageReview } from './useReview.js'
import { useElementSelection } from './hooks/useElementSelection.js'
import { useViewportBoxing } from './hooks/useViewportBoxing.js'
import { useDragResize } from './hooks/useDragResize.js'
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
import { injectReactPageReviewStyles } from './injectStyles.js'

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

  const [treeHoverRect, setTreeHoverRect] = useState(null)
  const [componentTree, setComponentTree] = useState(null)

  const [selectedScreenshots, setSelectedScreenshots] = useState([])
  const [confirm, setConfirm] = useState(null)

  useEffect(() => {
    injectReactPageReviewStyles()
  }, [])

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

  const panelInteractingRef = useRef(false)
  const toolbarRef = useRef(null)

  const onIgnoreTarget = useCallback((target) => {
    if (panelInteractingRef.current) return true
    return !!target.closest('.rpr-review-overlay')
  }, [])

  const selection = useElementSelection({
    active: active && !formVisible,
    mode,
    onIgnoreTarget
  })

  const handleBoxCreate = useCallback((box, e) => {
    if (!isMultiSelectKey(e)) {
      selection.clearSelectedElements()
    }
  }, [selection.clearSelectedElements])

  const boxing = useViewportBoxing({
    active: active && !formVisible,
    mode,
    onIgnoreTarget,
    onBoxCreate: handleBoxCreate
  })

  const toolbarDrag = useDragResize({
    initialPosition: { x: 0, y: 0 },
    initialSize: { width: null, height: null },
    minWidth: 400,
    minHeight: 48,
    isDragHandle: (target) =>
      target.classList?.contains('rpr-review-toolbar-title') ||
      target.classList?.contains('rpr-review-toolbar'),
    measureRef: toolbarRef
  })

  const modalDrag = useDragResize({
    initialPosition: { x: 0, y: 0 },
    initialSize: { width: 560, height: null },
    minWidth: 360,
    minHeight: 300,
    isDragHandle: (target) => {
      const header = target.closest('.ant-modal-header')
      const close = target.closest('.ant-modal-close')
      return !!header && !close
    }
  })

  useEffect(() => {
    panelInteractingRef.current =
      toolbarDrag.isDragging ||
      toolbarDrag.isResizing ||
      modalDrag.isDragging ||
      modalDrag.isResizing
  }, [toolbarDrag.isDragging, toolbarDrag.isResizing, modalDrag.isDragging, modalDrag.isResizing])

  const selectedCount = selection.selectedElements.length + boxing.selectedBoxes.length
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
    selection.selectedElements.forEach(item => {
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
    boxing.selectedBoxes.forEach(box => {
      targets.push({
        type: 'viewport',
        viewportRect: box.rect
      })
    })
    return targets
  }, [selection.selectedElements, boxing.selectedBoxes, buildLocators])

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
    selection.clearSelectedElements()
    boxing.clearBoxes()
    setComponentTree(null)
  }, [selection.clearSelectedElements, boxing.clearBoxes])

  const openReviewForm = useCallback(() => {
    const env = captureEnv()
    const targets = buildTargets()
    const firstElement = selection.selectedElements[0]
    const nodeInfo = firstElement?.el ? getNodeInfo(firstElement.el) : null

    setForm({
      type: selection.selectedElements.length > 0 ? 'element' : 'viewport',
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
  }, [captureEnv, buildTargets, selection.selectedElements, buildLocators])

  const captureScreenshots = useCallback(async () => {
    const screenshots = []
    // 截取期间隐藏评审工具自身 UI（工具栏/弹窗/高亮均在 overlay 内），结束后恢复
    const overlay =
      selectedScreenshots.length > 0 ? document.querySelector('.rpr-review-overlay') : null
    const prevDisplay = overlay ? overlay.style.display : ''
    if (overlay) {
      overlay.style.display = 'none'
      await new Promise(resolve => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
      })
    }
    try {
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
    } finally {
      if (overlay) overlay.style.display = prevDisplay
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
    selection.selectElement(el)
    boxing.clearBoxes()
    setTreeVisible(false)
  }, [selection.selectElement, boxing.clearBoxes])

  const onSelectedElementClick = useCallback((item, e) => {
    if (!isMultiSelectKey(e)) return
    e.stopPropagation()
    selection.removeSelectedElement(item)
  }, [selection.removeSelectedElement])

  const onBoxMouseDown = useCallback((box, e) => {
    if (!isMultiSelectKey(e)) return
    e.stopPropagation()
    boxing.removeBox(box)
  }, [boxing.removeBox])

  const onKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      if (formVisible) setFormVisible(false)
      else close()
    }
  }, [formVisible, close])

  const openTreePanel = useCallback(() => {
    if (selection.selectedElements.length === 0) {
      setComponentTree(null)
    }
    setTreeVisible(true)
  }, [selection.selectedElements.length])

  useEffect(() => {
    if (!active) return
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [active, onKeyDown])

  useEffect(() => {
    if (active) {
      setMode('element')
    } else {
      clearAllSelections()
      resetForm()
      setListVisible(false)
      setTreeVisible(false)
      setConfirm(null)
    }
  }, [active, clearAllSelections, resetForm])

  useEffect(() => {
    if (selection.selectedElements.length > 0) {
      setComponentTree(getComponentTree(selection.selectedElements[0].el))
    } else {
      setComponentTree(null)
    }
  }, [selection.selectedElements])

  const moreMenuItems = useMemo(() => {
    const items = []
    if (enableComponentTree) {
      items.push({ key: 'tree', label: '组件树' })
    }
    items.push({ key: 'list', label: '评审列表' })
    items.push({ type: 'divider' })
    items.push({ key: 'export-md', label: '导出 Markdown' })
    items.push({ key: 'export-json', label: '导出 JSON' })
    if (enableZipExport) {
      items.push({ key: 'export-zip', label: '导出 ZIP' })
    }
    items.push({ type: 'divider' })
    items.push({ key: 'clear', label: '取消选择', disabled: selectedCount === 0 })
    return items
  }, [enableComponentTree, enableZipExport, selectedCount])

  const handleMoreClick = useCallback(({ key }) => {
    switch (key) {
      case 'tree':
        openTreePanel()
        break
      case 'list':
        setListVisible(true)
        break
      case 'export-md':
        handleExportMarkdown()
        break
      case 'export-json':
        handleExportJSON()
        break
      case 'export-zip':
        handleExportZIP()
        break
      case 'clear':
        clearAllSelections()
        break
      default:
        break
    }
  }, [openTreePanel, handleExportMarkdown, handleExportJSON, handleExportZIP, clearAllSelections])

  const toolbarStyle = {
    transform: `translate(calc(-50% + ${toolbarDrag.position.x}px), ${toolbarDrag.position.y}px)`,
    width: toolbarDrag.size.width ?? undefined,
    height: toolbarDrag.size.height ?? undefined
  }

  const modalStyle = {
    position: 'fixed',
    left: `calc(50% + ${modalDrag.position.x}px)`,
    top: `calc(50% + ${modalDrag.position.y}px)`,
    transform: 'translate(-50%, -50%)',
    height: modalDrag.size.height ?? undefined
  }

  const resizeHandlePositions = ['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']

  if (!active) return null

  return createPortal(
    <div className="rpr-review-overlay">
      <div
        ref={toolbarRef}
        className={`rpr-review-toolbar ${toolbarDrag.isDragging ? 'rpr-is-dragging' : ''}`}
        style={toolbarStyle}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={toolbarDrag.onDragStart}
      >
        <div className="rpr-toolbar-left">
          <span className="rpr-review-toolbar-title" title="按住此处可拖动">页面评审模式</span>
          <Radio.Group
            size="small"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            optionType="button"
            buttonStyle="solid"
          >
            <Radio.Button value="element">选择元素</Radio.Button>
            <Radio.Button value="viewport">框定视图</Radio.Button>
          </Radio.Group>
        </div>
        <div className="rpr-toolbar-right">
          <Badge count={selectedCount} size="small" offset={[10, -2]}>
            <Button
              type="primary"
              size="small"
              disabled={selectedCount === 0}
              onClick={openReviewForm}
            >
              评审
            </Button>
          </Badge>
          <Button type="primary" danger size="small" onClick={close}>
            退出评审
          </Button>
          <Dropdown
            menu={{ items: moreMenuItems, onClick: handleMoreClick }}
            trigger={['click']}
            placement="bottomRight"
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
          >
            <Button size="small">更多</Button>
          </Dropdown>
        </div>
        <div className="rpr-toolbar-resize-handle" onMouseDown={toolbarDrag.onResizeStart} />
      </div>

      {selection.hoveredRect && mode === 'element' && !boxing.isResizing && !boxing.dragRect && (
        <div className="rpr-highlight-box rpr-hover-box" style={highlightStyle(selection.hoveredRect)}>
          <span className="rpr-highlight-label">{selection.hoveredTag}</span>
        </div>
      )}

      {selection.selectedElements.map((item, idx) => (
        <div
          key={'el-' + idx}
          className="rpr-highlight-box rpr-selected-box"
          style={highlightStyle(item.rect)}
          onClick={(e) => onSelectedElementClick(item, e)}
        >
          <span className="rpr-highlight-label">
            {item.tag}
            <i className="rpr-remove-icon" onClick={(e) => { e.stopPropagation(); selection.removeSelectedElement(item) }}>×</i>
          </span>
        </div>
      ))}

      {treeHoverRect && (
        <div className="rpr-highlight-box rpr-tree-hover-box" style={highlightStyle(boxing.toViewportRect(treeHoverRect))} />
      )}

      {boxing.selectedBoxes.map(box => (
        <div
          key={box.id}
          className={`rpr-drag-rect rpr-selected-box ${boxing.resizingBoxId === box.id ? 'rpr-is-resizing' : ''}`}
          style={boxStyle(boxing.toViewportRect(box.rect))}
          onMouseDown={(e) => onBoxMouseDown(box, e)}
        >
          <span className="rpr-box-label" onMouseDown={(e) => e.stopPropagation()}>
            框选 {box.index + 1}
            <i className="rpr-remove-icon" onClick={(e) => { e.stopPropagation(); boxing.removeBox(box) }}>×</i>
          </span>
          {resizeHandlePositions.map(position => (
            <div
              key={position}
              className={`rpr-resize-handle rpr-handle-${position}`}
              style={handleStyle(position, boxing.toViewportRect(box.rect))}
              onMouseDown={(e) => boxing.startResize(box, position, e)}
            />
          ))}
        </div>
      ))}

      {boxing.dragRect && (
        <div className="rpr-drag-rect rpr-preview-box" style={boxStyle(boxing.dragRect)} />
      )}

      <Modal
        title={<div className="rpr-review-modal-header">添加评审意见</div>}
        open={formVisible}
        onCancel={() => setFormVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setFormVisible(false)}>取消</Button>,
          <Button key="save" type="primary" disabled={!canSubmit} onClick={submitReview}>保存评审</Button>
        ]}
        width={modalDrag.size.width}
        style={modalStyle}
        className="rpr-review-modal"
        wrapClassName="rpr-review-modal-wrap"
        zIndex={10002}
        getContainer={false}
        closeIcon={<span className="rpr-review-modal-close">×</span>}
        modalRender={(node) => <div onMouseDown={modalDrag.onDragStart}>{node}</div>}
      >
        <div className="rpr-form-row">
          <label>评审目标</label>
          <div className="rpr-review-targets-summary">
            {form.targets.map((target, idx) => (
              <Tag
                key={idx}
                className="rpr-target-tag"
                title={target.type === 'element'
                  ? (target.selector || '元素')
                  : `框选 ${target.viewportRect?.x},${target.viewportRect?.y}`}
              >
                {target.type === 'element'
                  ? (target.elementText || target.selector || '元素')
                  : `框选 ${target.viewportRect?.x},${target.viewportRect?.y}`}
              </Tag>
            ))}
          </div>
        </div>
        <div className="rpr-form-row">
          <label>窗口尺寸</label>
          <span className="rpr-text-muted">{form.viewport?.width} × {form.viewport?.height}</span>
        </div>
        <div className="rpr-form-row">
          <label>滚动位置</label>
          <span className="rpr-text-muted">x={form.scroll?.x}, y={form.scroll?.y}</span>
        </div>
        <div className="rpr-form-row">
          <label>截图</label>
          <Checkbox.Group
            options={[
              { label: '选中目标', value: SCREENSHOT_TYPES.TARGETS },
              { label: '当前视口', value: SCREENSHOT_TYPES.VIEWPORT },
              { label: '完整页面', value: SCREENSHOT_TYPES.FULL_PAGE }
            ]}
            value={selectedScreenshots}
            onChange={(values) => setSelectedScreenshots(values)}
          />
        </div>
        <div className="rpr-form-row">
          <label>标题 <span className="rpr-required">*</span></label>
          <Input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="例如：按钮样式不统一"
          />
        </div>
        <div className="rpr-form-row">
          <label>严重等级 <span className="rpr-required">*</span></label>
          <Select
            value={form.severity}
            onChange={(value) => setForm({ ...form, severity: value })}
            style={{ width: 160 }}
            options={[
              { value: 'low', label: '低' },
              { value: 'medium', label: '中' },
              { value: 'high', label: '高' },
              { value: 'critical', label: '严重' }
            ]}
          />
        </div>
        <div className="rpr-form-row">
          <label>评审建议 <span className="rpr-required">*</span></label>
          <Input.TextArea
            rows={4}
            value={form.suggestion}
            onChange={(e) => setForm({ ...form, suggestion: e.target.value })}
            placeholder="描述问题现象、影响和改进建议"
          />
        </div>
        <div className="rpr-modal-resize-handle" onMouseDown={modalDrag.onResizeStart} />
      </Modal>

      <Drawer
        title="组件树检查器"
        open={treeVisible}
        onClose={() => setTreeVisible(false)}
        placement="right"
        size={480}
        resizable
        zIndex={10003}
        getContainer={false}
        className="rpr-review-drawer"
      >
        {!componentTree ? (
          <Empty description="先选择一个元素以查看组件树" />
        ) : (
          <div className="rpr-tree-panel">
            {componentTree.framework && componentTree.framework.length > 0 && (
              <div className="rpr-tree-section">
                <h4>框架组件树</h4>
                <div className="rpr-tree-list">
                  {componentTree.framework.map((node, idx) => (
                    <div
                      key={'fw-' + idx}
                      className="rpr-tree-node"
                      onMouseEnter={() => onTreeNodeHover(node)}
                      onMouseLeave={() => setTreeHoverRect(null)}
                      onClick={() => onTreeNodeSelect(node)}
                    >
                      <span className="rpr-node-name">{node.componentName}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="rpr-tree-section">
              <h4>DOM 树</h4>
              <div className="rpr-tree-list">
                {componentTree.dom.map((node, idx) => (
                  <div
                    key={'dom-' + idx}
                    className="rpr-tree-node"
                    style={{ paddingLeft: idx * 12 }}
                    onMouseEnter={() => onTreeNodeHover(node)}
                    onMouseLeave={() => setTreeHoverRect(null)}
                    onClick={() => onTreeNodeSelect(node)}
                  >
                    <span className="rpr-node-tag">{node.tag}</span>
                    {node.id && <span className="rpr-node-id">#{node.id}</span>}
                    {node.aria?.role && <span className="rpr-node-aria">role={node.aria.role}</span>}
                    {node.testId && <span className="rpr-node-testid">testid={node.testId}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Drawer>

      <Drawer
        title="当前页面评审意见"
        open={listVisible}
        onClose={() => setListVisible(false)}
        placement="right"
        size={560}
        resizable
        zIndex={10003}
        getContainer={false}
        className="rpr-review-drawer"
        extra={(
          <Dropdown
            menu={{
              items: [
                { key: 'export-md', label: '导出 Markdown' },
                { key: 'export-json', label: '导出 JSON' },
                ...(enableZipExport ? [{ key: 'export-zip', label: '导出 ZIP' }] : []),
                { type: 'divider' },
                { key: 'clear-page', label: '清空本页', danger: true }
              ],
              onClick: ({ key }) => {
                if (key === 'export-md') handleExportMarkdown()
                else if (key === 'export-json') handleExportJSON()
                else if (key === 'export-zip') handleExportZIP()
                else if (key === 'clear-page') clearPage()
              }
            }}
            trigger={['click']}
            placement="bottomRight"
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
          >
            <Button size="small">操作</Button>
          </Dropdown>
        )}
      >
        {pageReviews.length === 0 ? (
          <Empty description="暂无评审意见" />
        ) : (
          <div className="rpr-review-list">
            {pageReviews.map(item => (
              <Card
                key={item.id}
                size="small"
                title={item.title}
                extra={(
                  <div style={{ display: 'flex', gap: 6 }}>
                    <Tag color={severityColor(item.severity)}>{severityText(item.severity)}</Tag>
                    <Tag>{item.targets?.length || 1} 个目标</Tag>
                    {hasComponentTree(item) && <Tag color="success">树</Tag>}
                  </div>
                )}
              >
                <p className="rpr-review-item-target">{summarizeTargets(item.targets)}</p>
                <p className="rpr-review-item-suggestion">{item.suggestion}</p>
                <div className="rpr-review-item-meta">
                  <span className="rpr-text-muted">{new Date(item.createdAt).toLocaleString()}</span>
                  <div className="rpr-review-item-actions">
                    {item.status !== 'resolved' && <Button type="link" size="small" onClick={() => resolve(item.id)}>标记解决</Button>}
                    <Button type="link" danger size="small" onClick={() => remove(item.id)}>删除</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Drawer>

      <Modal
        title={confirm?.title}
        open={!!confirm}
        onOk={() => { confirm?.onConfirm(); setConfirm(null) }}
        onCancel={() => setConfirm(null)}
        zIndex={10004}
        getContainer={false}
        width={360}
      >
        <p>{confirm?.message}</p>
      </Modal>
    </div>,
    document.body
  )
}

function isMultiSelectKey(e) {
  return e.ctrlKey || e.metaKey
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

function severityText(s) {
  const map = { low: '低', medium: '中', high: '高', critical: '严重' }
  return map[s] || s
}

function severityColor(s) {
  const map = { low: 'default', medium: 'warning', high: 'error', critical: 'error' }
  return map[s] || 'default'
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
