// react-page-review 端到端验证脚本
// 用法: NODE_PATH=$(npm root -g) node test-react-e2e.cjs
// 前置: examples/react-test-app 的 vite dev server 已启动 (默认 5173)
const { chromium } = require('playwright')
const assert = require('node:assert')

const BASE = process.env.BASE_URL || 'http://localhost:5173'

const results = []
function check(name, ok, extra = '') {
  results.push({ name, ok })
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${extra ? '  -- ' + extra : ''}`)
}

async function openMoreMenu(page) {
  await page.locator('.rpr-review-toolbar button').filter({ hasText: /更\s*多/ }).click()
  await page.waitForSelector('.ant-dropdown-menu-item', { state: 'visible' })
}

async function clickMoreItem(page, label) {
  await openMoreMenu(page)
  await page.locator('.ant-dropdown-menu-item', { hasText: label }).click()
}

async function waitBlob(page, minCount) {
  await page.waitForFunction(
    (n) => (window.__blobs || []).length >= n,
    minCount,
    { timeout: 15000 }
  )
  return page.evaluate(() => window.__blobs.at(-1))
}

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })
  const pageErrors = []
  page.on('pageerror', (e) => pageErrors.push(String(e)))
  const consoleWarnings = []
  page.on('console', (msg) => {
    if (msg.type() === 'warning' || msg.type() === 'error') consoleWarnings.push(msg.text())
  })

  // 拦截 createObjectURL 捕获导出文件字节
  await page.addInitScript(() => {
    window.__blobs = []
    const orig = URL.createObjectURL.bind(URL)
    URL.createObjectURL = function (blob) {
      if (blob && typeof blob.arrayBuffer === 'function') {
        blob.arrayBuffer().then((buf) => {
          window.__blobs.push({ type: blob.type, bytes: Array.from(new Uint8Array(buf)) })
        })
      }
      return orig(blob)
    }
  })

  await page.goto(BASE, { waitUntil: 'networkidle' })

  // 1. 启动评审模式
  await page.getByRole('button', { name: 'Start Review' }).click()
  await page.waitForSelector('.rpr-review-toolbar', { state: 'visible' })
  check('工具栏渲染（rpr- 前缀类名）', true)

  // 2. 样式注入到 head
  const styleInjected = await page
    .$eval('#rpr-styles', (el) => el.textContent.length)
    .catch(() => 0)
  check('样式标签自动注入 (#rpr-styles)', styleInjected > 500, `长度 ${styleInjected}`)

  // 3. 自定义类全部带 rpr- 前缀（无全局污染类名）
  const toolbarClasses = await page.$$eval('.rpr-review-toolbar *', (els) =>
    Array.from(new Set(els.flatMap((el) => Array.from(el.classList))))
  )
  const badClasses = toolbarClasses.filter(
    (c) => !c.startsWith('rpr-') && !c.startsWith('ant-') && !c.startsWith('css-')
  )
  check('自定义类名均带 rpr-/ant- 前缀', badClasses.length === 0, badClasses.join(','))

  // 4. 元素模式：点击卡片选中
  await page.click('.test-card >> nth=0')
  await page.waitForSelector('.rpr-selected-box', { state: 'visible' })
  let selectedCount = await page.locator('.rpr-selected-box').count()
  check('点击卡片后元素选中高亮', selectedCount === 1, `数量 ${selectedCount}`)

  // 5. Ctrl 多选（选 Action 按钮，其隐式 role=button 可验证无障碍信息）
  await page.click('.test-card button:has-text("Action 3")', { modifiers: ['ControlOrMeta'] })
  await page.waitForFunction(() => document.querySelectorAll('.rpr-selected-box').length === 2)
  selectedCount = await page.locator('.rpr-selected-box').count()
  check('Ctrl/Cmd 多选第二个元素', selectedCount === 2, `数量 ${selectedCount}`)

  // 6. 选中后不应自动弹出评审弹窗
  const modalAutoOpen = await page.locator('.rpr-review-modal').isVisible().catch(() => false)
  check('选中后未自动弹出评审弹窗', !modalAutoOpen)

  // 7. 点击「评审」按钮弹出弹窗
  await page.locator('.rpr-review-toolbar .ant-badge button').click()
  await page.waitForSelector('.rpr-review-modal', { state: 'visible' })
  check('点击「评审」弹出评审弹窗', true)

  // 8. 弹窗内目标数量为 2
  const targetTags = await page.locator('.rpr-review-modal .rpr-target-tag').count()
  check('评审弹窗显示 2 个选中目标', targetTags === 2, `数量 ${targetTags}`)

  // 9. 填写表单并保存
  await page.getByPlaceholder('例如：按钮样式不统一').fill('E2E 测试标题')
  await page.getByPlaceholder('描述问题现象、影响和改进建议').fill('E2E 测试建议内容')
  await page.getByRole('button', { name: /保存评审/ }).click()
  await page.waitForSelector('.rpr-review-modal', { state: 'hidden' })
  check('保存评审后弹窗关闭', true)

  // 10. localStorage 写入
  const stored = await page.evaluate(() => {
    const raw = localStorage.getItem('page-reviews')
    return raw ? JSON.parse(raw) : null
  })
  const allReviews = stored
    ? Array.isArray(stored)
      ? stored
      : Object.values(stored).flat()
    : []
  const mine = allReviews.find((r) => r.title === 'E2E 测试标题')
  check('localStorage 写入评审记录', !!mine, mine ? `id=${mine.id}` : '')
  check('记录包含 2 个目标', !!mine && Array.isArray(mine.targets) && mine.targets.length === 2)
  check(
    '记录含 CSS 选择器与 xpath',
    !!mine && mine.targets.every((t) => t.selector && t.locators?.cssSelector && t.locators?.xpath)
  )
  const ariaTarget = mine?.targets?.find((t) => t.aria && (t.aria.role || t.aria.accessibleName))
  check('记录含无障碍信息（role/accessibleName）', !!ariaTarget, JSON.stringify(ariaTarget?.aria || {}))

  // 11. 「更多」下拉点击触发且保持稳定
  await openMoreMenu(page)
  await page.mouse.move(10, 10) // 移开鼠标
  await page.waitForTimeout(300)
  const menuStillOpen = await page.locator('.ant-dropdown-menu-item').first().isVisible()
  check('「更多」下拉点击触发、移开不消失', menuStillOpen)

  // 12. 导出 JSON
  await page.locator('.ant-dropdown-menu-item', { hasText: '导出 JSON' }).click()
  const jsonBlob = await waitBlob(page, 1)
  const jsonText = Buffer.from(jsonBlob.bytes).toString('utf8')
  let jsonOk = false
  try {
    const parsed = JSON.parse(jsonText)
    const list = Array.isArray(parsed) ? parsed : parsed.reviews || Object.values(parsed).flat()
    jsonOk = JSON.stringify(list).includes('E2E 测试标题')
  } catch {}
  check('导出 JSON 可下载且内容正确', jsonOk, `${jsonBlob.bytes.length} bytes`)

  // 13. 导出 Markdown
  await clickMoreItem(page, '导出 Markdown')
  const mdBlob = await waitBlob(page, 2)
  const mdText = Buffer.from(mdBlob.bytes).toString('utf8')
  check('导出 Markdown 可下载且内容正确', mdText.includes('E2E 测试标题'), `${mdBlob.bytes.length} bytes`)

  // 14. 导出 ZIP（PK 头校验）
  await clickMoreItem(page, '导出 ZIP')
  const zipBlob = await waitBlob(page, 3)
  const isZip = zipBlob.bytes[0] === 0x50 && zipBlob.bytes[1] === 0x4b
  check('导出 ZIP 可下载且为合法 ZIP', isZip, `${zipBlob.bytes.length} bytes, 魔数 ${zipBlob.bytes.slice(0, 2)}`)

  // 15. 评审列表抽屉
  await clickMoreItem(page, '评审列表')
  await page.waitForSelector('.ant-drawer', { state: 'visible' })
  const drawerText = await page.locator('.ant-drawer').first().innerText()
  check('评审列表抽屉显示已保存记录', drawerText.includes('E2E 测试标题'))
  await page.locator('.ant-drawer-close').first().click()
  await page.waitForSelector('.ant-drawer-content', { state: 'hidden' }).catch(() => {})
  await page.waitForTimeout(400)

  // 16. 组件树抽屉
  await clickMoreItem(page, '组件树')
  await page.waitForSelector('.ant-drawer', { state: 'visible' })
  const treeText = await page.locator('.ant-drawer').first().innerText()
  check('组件树抽屉显示 DOM 树', treeText.includes('DOM 树'))
  await page.locator('.ant-drawer-close').first().click()
  await page.waitForTimeout(400)

  // 17. 无 Drawer width 弃用警告
  const widthWarn = consoleWarnings.find((w) => w.includes('width is deprecated'))
  check('无 Drawer width 弃用警告', !widthWarn, widthWarn || '')

  // 18. 无页面级 JS 错误
  check('无页面 JS 错误', pageErrors.length === 0, pageErrors.join(' | '))

  await browser.close()

  const failed = results.filter((r) => !r.ok)
  console.log(`\n共 ${results.length} 项, 通过 ${results.length - failed.length}, 失败 ${failed.length}`)
  process.exit(failed.length ? 1 : 0)
})().catch((e) => {
  console.error('脚本异常:', e)
  process.exit(1)
})
