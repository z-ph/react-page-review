import { useState, useEffect, useCallback, useRef } from 'react'

export function useViewportBoxing({ active, mode, onIgnoreTarget, onBoxCreate }) {
  const [selectedBoxes, setSelectedBoxes] = useState([])
  const [dragRect, setDragRect] = useState(null)
  const [resizingBoxId, setResizingBoxId] = useState(null)
  const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 })
  const scrollPosRef = useRef(scrollPos)

  useEffect(() => {
    scrollPosRef.current = scrollPos
  }, [scrollPos])

  const isEnabled = active && mode === 'viewport'
  const boxCounterRef = useRef(0)
  const boxesRef = useRef(selectedBoxes)
  useEffect(() => { boxesRef.current = selectedBoxes }, [selectedBoxes])
  const isDraggingBoxRef = useRef(false)
  const dragStartRef = useRef({ x: 0, y: 0 })
  const resizeHandleRef = useRef('')
  const resizeStartRef = useRef({ x: 0, y: 0, rect: null })

  const getSafeTarget = useCallback((e) => {
    const target = e.target
    if (!target || !(target instanceof Element)) return null
    if (onIgnoreTarget && onIgnoreTarget(target)) return null
    return target
  }, [onIgnoreTarget])

  const toViewportRect = useCallback((rect) => {
    if (!rect) return null
    const currentScroll = scrollPosRef.current
    return {
      x: rect.x - currentScroll.x,
      y: rect.y - currentScroll.y,
      width: rect.width,
      height: rect.height
    }
  }, [])

  const removeBox = useCallback((box) => {
    setSelectedBoxes(prev => {
      const next = prev.filter(b => b.id !== box.id)
      next.forEach((b, idx) => { b.index = idx })
      return next
    })
  }, [])

  const clearBoxes = useCallback(() => {
    setSelectedBoxes([])
    setDragRect(null)
  }, [])

  const startResize = useCallback((box, position, e) => {
    e.stopPropagation()
    setResizingBoxId(box.id)
    resizeHandleRef.current = position
    resizeStartRef.current = {
      x: e.clientX + window.scrollX,
      y: e.clientY + window.scrollY,
      rect: { ...box.rect }
    }
  }, [])

  const onMouseDown = useCallback((e) => {
    if (!isEnabled) return
    if (resizingBoxId) return
    const target = getSafeTarget(e)
    if (!target) return
    e.preventDefault()
    isDraggingBoxRef.current = true
    dragStartRef.current = { x: e.clientX, y: e.clientY }
    setDragRect({ x: e.clientX, y: e.clientY, width: 0, height: 0 })
  }, [isEnabled, resizingBoxId, getSafeTarget])

  const onMouseMove = useCallback((e) => {
    if (!isEnabled && !resizingBoxId) return
    if (resizingBoxId && resizeStartRef.current.rect) {
      const dx = e.clientX + window.scrollX - resizeStartRef.current.x
      const dy = e.clientY + window.scrollY - resizeStartRef.current.y
      const orig = resizeStartRef.current.rect
      setSelectedBoxes(prev => prev.map(b => {
        if (b.id !== resizingBoxId) return b
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
        return { ...b, rect: { x, y, width, height } }
      }))
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
  }, [isEnabled, resizingBoxId])

  const onMouseUp = useCallback((e) => {
    if (!isEnabled && !resizingBoxId) return
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
        const box = {
          id: 'box-' + Date.now() + '-' + boxCounterRef.current++,
          index: boxesRef.current.length,
          rect: {
            x: prev.x + window.scrollX,
            y: prev.y + window.scrollY,
            width: prev.width,
            height: prev.height
          }
        }
        setSelectedBoxes(boxes => [...boxes, box])
        onBoxCreate?.(box, e)
      }
      return null
    })
  }, [isEnabled, resizingBoxId, onBoxCreate])

  const onScroll = useCallback(() => {
    const nextScroll = { x: window.scrollX, y: window.scrollY }
    setScrollPos(nextScroll)
    scrollPosRef.current = nextScroll
  }, [])

  // 滚动跟随与模式解耦：评审激活即挂载，保证元素模式下框选区域也随文档滚动
  useEffect(() => {
    if (!active) return
    setScrollPos({ x: window.scrollX, y: window.scrollY })
    window.addEventListener('scroll', onScroll, true)
    return () => {
      window.removeEventListener('scroll', onScroll, true)
    }
  }, [active, onScroll])

  // 框选交互仍按框选模式门控（调整尺寸中的 resizingBoxId 例外保留）
  useEffect(() => {
    if (!isEnabled && !resizingBoxId) return
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    return () => {
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [isEnabled, resizingBoxId, onMouseDown, onMouseMove, onMouseUp])

  return {
    selectedBoxes,
    setSelectedBoxes,
    dragRect,
    resizingBoxId,
    isResizing: resizingBoxId !== null,
    removeBox,
    clearBoxes,
    startResize,
    toViewportRect
  }
}
