import { toPng } from 'html-to-image'

export const SCREENSHOT_TYPES = {
  ELEMENT: 'element',
  VIEWPORT: 'viewport',
  FULL_PAGE: 'fullpage',
  BOX: 'box',
  TARGETS: 'targets'
}

export function generateScreenshotFilename(type) {
  const timestamp = Date.now()
  const rand = Math.random().toString(36).slice(2, 6)
  return `screenshot-${type}-${timestamp}-${rand}.png`
}

export async function captureElement(el, options = {}) {
  if (!el) return null
  try {
    const dataUrl = await toPng(el, {
      pixelRatio: options.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: true,
      ...options
    })
    return dataUrl
  } catch (err) {
    console.error('captureElement failed:', err)
    return null
  }
}

export async function captureViewport(options = {}) {
  const cropRect = {
    x: window.scrollX,
    y: window.scrollY,
    width: window.innerWidth,
    height: window.innerHeight
  }
  return captureDocumentRegion(cropRect, options)
}

export async function captureFullPage(options = {}) {
  const target = document.documentElement
  const cropRect = {
    x: 0,
    y: 0,
    width: target.scrollWidth,
    height: target.scrollHeight
  }
  return captureDocumentRegion(cropRect, options)
}

export async function captureBox(rect, options = {}) {
  if (!rect || rect.width < 1 || rect.height < 1) return null
  return captureDocumentRegion(rect, options)
}

async function captureDocumentRegion(cropRect, options = {}) {
  const target = document.documentElement
  const originalOverflow = target.style.overflow
  const originalWidth = target.style.width
  const originalHeight = target.style.height

  try {
    target.style.overflow = 'visible'
    target.style.width = 'auto'
    target.style.height = 'auto'

    const dataUrl = await toPng(target, {
      pixelRatio: options.pixelRatio || window.devicePixelRatio || 1,
      cacheBust: true,
      ...options
    })

    return cropDataUrl(dataUrl, cropRect, options.highlights)
  } catch (err) {
    console.error('captureDocumentRegion failed:', err)
    return null
  } finally {
    target.style.overflow = originalOverflow
    target.style.width = originalWidth
    target.style.height = originalHeight
  }
}

function cropDataUrl(dataUrl, cropRect, highlights = []) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const scale = window.devicePixelRatio || 1
      const canvas = document.createElement('canvas')
      canvas.width = Math.round(cropRect.width * scale)
      canvas.height = Math.round(cropRect.height * scale)
      const ctx = canvas.getContext('2d')
      ctx.drawImage(
        img,
        cropRect.x * scale,
        cropRect.y * scale,
        cropRect.width * scale,
        cropRect.height * scale,
        0,
        0,
        canvas.width,
        canvas.height
      )

      highlights.forEach(hl => {
        const x = (hl.rect.x - cropRect.x) * scale
        const y = (hl.rect.y - cropRect.y) * scale
        const w = hl.rect.width * scale
        const h = hl.rect.height * scale
        ctx.fillStyle = 'rgba(245, 108, 108, 0.12)'
        ctx.fillRect(x, y, w, h)
        ctx.strokeStyle = '#f56c6c'
        ctx.lineWidth = 2 * scale
        ctx.strokeRect(x, y, w, h)
      })

      resolve(canvas.toDataURL('image/png'))
    }
    img.onerror = reject
    img.src = dataUrl
  })
}

export async function dataUrlToBlob(dataUrl) {
  const res = await fetch(dataUrl)
  return res.blob()
}

export async function uploadScreenshot(dataUrl, filename, uploadFn) {
  if (!uploadFn) return null
  try {
    const blob = await dataUrlToBlob(dataUrl)
    return await uploadFn(blob, filename)
  } catch (err) {
    console.error('uploadScreenshot failed:', err)
    return null
  }
}
