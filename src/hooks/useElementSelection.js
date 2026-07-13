import { useState, useEffect, useCallback, useRef } from 'react'

export function useElementSelection({ active, mode, onIgnoreTarget }) {
  const [hoveredRect, setHoveredRect] = useState(null)
  const [hoveredTag, setHoveredTag] = useState('')
  const [selectedElements, setSelectedElements] = useState([])
  const [scrollPos, setScrollPos] = useState({ x: 0, y: 0 })
  const scrollPosRef = useRef(scrollPos)

  useEffect(() => {
    scrollPosRef.current = scrollPos
  }, [scrollPos])

  const isEnabled = active && mode === 'element'

  const getSafeTarget = useCallback((e) => {
    const target = e.target
    if (!target || !(target instanceof Element)) return null
    if (onIgnoreTarget && onIgnoreTarget(target)) return null
    return target
  }, [onIgnoreTarget])

  const onMouseMove = useCallback((e) => {
    if (!isEnabled) return
    if (e.buttons !== 0) return
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
  }, [isEnabled, getSafeTarget])

  const onMouseOut = useCallback(() => {
    setHoveredRect(null)
  }, [])

  const onClick = useCallback((e) => {
    if (!isEnabled) return
    const target = getSafeTarget(e)
    if (!target) return
    e.preventDefault()
    e.stopPropagation()

    const rect = target.getBoundingClientRect()
    const currentScroll = scrollPosRef.current
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
        x: rect.left + currentScroll.x,
        y: rect.top + currentScroll.y,
        width: rect.width,
        height: rect.height
      }
    }

    if (isMultiSelectKey(e)) {
      setSelectedElements(prev => {
        const idx = prev.findIndex(s => s.el === target)
        if (idx > -1) return prev.filter((_, i) => i !== idx)
        return [...prev, item]
      })
    } else {
      setSelectedElements([item])
    }
  }, [isEnabled, getSafeTarget])

  const onScroll = useCallback(() => {
    const nextScroll = { x: window.scrollX, y: window.scrollY }
    setScrollPos(nextScroll)
    scrollPosRef.current = nextScroll
    setSelectedElements(prev => prev.map(item => {
      const el = item.el || (item.selector ? document.querySelector(item.selector) : null)
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
  }, [])

  useEffect(() => {
    if (!isEnabled) return
    setScrollPos({ x: window.scrollX, y: window.scrollY })
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseout', onMouseOut)
    document.addEventListener('click', onClick, true)
    window.addEventListener('scroll', onScroll, true)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseout', onMouseOut)
      document.removeEventListener('click', onClick, true)
      window.removeEventListener('scroll', onScroll, true)
    }
  }, [isEnabled, onMouseMove, onMouseOut, onClick, onScroll])

  const clearSelectedElements = useCallback(() => {
    setSelectedElements([])
  }, [])

  const removeSelectedElement = useCallback((item) => {
    setSelectedElements(prev => prev.filter(s => s.el !== item.el))
  }, [])

  const selectElement = useCallback((el) => {
    if (!el || !(el instanceof Element)) return
    const rect = el.getBoundingClientRect()
    const currentScroll = scrollPosRef.current
    setSelectedElements([{
      el,
      selector: getElementSelector(el),
      tag: el.tagName.toLowerCase(),
      text: el.innerText?.slice(0, 40) || '',
      rect: {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      },
      docRect: {
        x: rect.left + currentScroll.x,
        y: rect.top + currentScroll.y,
        width: rect.width,
        height: rect.height
      }
    }])
  }, [])

  return {
    hoveredRect,
    hoveredTag,
    selectedElements,
    setSelectedElements,
    selectElement,
    removeSelectedElement,
    clearSelectedElements
  }
}

function isMultiSelectKey(e) {
  return e.ctrlKey || e.metaKey
}

function getElementSelector(el) {
  if (!el || !(el instanceof Element)) return ''
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
}
