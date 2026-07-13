import ReviewTool from './ReviewTool.jsx'
import { usePageReview } from './useReview.js'
import './style.css'

export { ReviewTool, usePageReview }
export {
  getNodeInfo,
  getCssSelector,
  getXPath,
  getAriaInfo,
  getTestId,
  getComponentTree
} from './inspector.js'
export {
  captureElement,
  captureViewport,
  captureFullPage,
  captureBox,
  generateScreenshotFilename,
  SCREENSHOT_TYPES
} from './screenshot.js'
export default ReviewTool
