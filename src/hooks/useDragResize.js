import { useState, useEffect, useCallback, useRef } from 'react'

export function useDragResize({
  initialPosition = { x: 0, y: 0 },
  initialSize = { width: null, height: null },
  minWidth = 200,
  minHeight = 40,
  isDragHandle,
  measureRef = null
}) {
  const [position, setPosition] = useState(initialPosition)
  const [size, setSize] = useState(initialSize)
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)

  const dragStartRef = useRef({ x: 0, y: 0 })
  const resizeStartRef = useRef({ x: 0, y: 0, width: 0, height: 0 })

  const onDragStart = useCallback((e) => {
    if (!isDragHandle(e.target)) return
    setIsDragging(true)
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    }
    e.stopPropagation()
  }, [isDragHandle, position])

  const onResizeStart = useCallback((e) => {
    let startWidth = size.width ?? 0
    let startHeight = size.height ?? 0
    if ((startWidth === 0 || startHeight === 0) && measureRef?.current) {
      const rect = measureRef.current.getBoundingClientRect()
      startWidth = rect.width
      startHeight = rect.height
    }
    setSize({ width: startWidth, height: startHeight })
    setIsResizing(true)
    resizeStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      width: startWidth,
      height: startHeight
    }
    e.stopPropagation()
  }, [size, measureRef])

  useEffect(() => {
    if (!isDragging && !isResizing) return
    const handleMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStartRef.current.x,
          y: e.clientY - dragStartRef.current.y
        })
      } else if (isResizing) {
        const dx = e.clientX - resizeStartRef.current.x
        const dy = e.clientY - resizeStartRef.current.y
        setSize({
          width: Math.max(minWidth, resizeStartRef.current.width + dx),
          height: Math.max(minHeight, resizeStartRef.current.height + dy)
        })
      }
    }
    const handleUp = () => {
      setIsDragging(false)
      setIsResizing(false)
    }
    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseup', handleUp)
    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseup', handleUp)
    }
  }, [isDragging, isResizing, minWidth, minHeight])

  return {
    position,
    size,
    isDragging,
    isResizing,
    onDragStart,
    onResizeStart
  }
}
