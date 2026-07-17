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
  await page.waitForTimeout(200)
}

async function selectMode(page, label) {
  const value = label === '框定视图' ? 'viewport' : 'element'
  await page.locator('[data-testid="rpr-mode-select"]').selectOption(value)
}

async function clickClearSelection(page) {
  await page.locator('.rpr-review-toolbar button', { hasText: '取消选择' }).click()
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
    // 记录评审 overlay 的 display 变化（验证截图期间隐藏 overlay，高亮由截图模块手动绘制）
    window.__uiDisplayLog = []
    new MutationObserver((mutations) => {
      for (const m of mutations) {
        const t = m.target
        if (t && t.classList && t.classList.contains('rpr-review-overlay')) {
          window.__uiDisplayLog.push(t.style.display || '')
        }
      }
    }).observe(document, {
      attributes: true,
      attributeFilter: ['style'],
      subtree: true
    })
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
    (c) => !c.startsWith('rpr-') && !c.startsWith('ant-') && !c.startsWith('anticon') && !c.startsWith('css-')
  )
  check('自定义类名均带 rpr-/ant- 前缀', badClasses.length === 0, badClasses.join(','))

  // 3.1 工具栏新布局：取消选择按钮外露、模式切换为下拉、更多菜单不含取消选择
  const clearBtn = page.locator('.rpr-review-toolbar button', { hasText: '取消选择' })
  check('工具栏存在「取消选择」按钮', await clearBtn.isVisible().catch(() => false))
  const clearBtnDisabled = await clearBtn.isDisabled()
  check('未选中时「取消选择」按钮禁用', clearBtnDisabled)
  const modeSelect = page.locator('[data-testid="rpr-mode-select"]')
  check('工具栏存在模式切换下拉', await modeSelect.isVisible().catch(() => false))
  await openMoreMenu(page)
  const moreHasClear = await page.locator('.ant-dropdown-menu-item', { hasText: '取消选择' }).count() > 0
  check('「更多」下拉中不再包含「取消选择」', !moreHasClear)
  // 关闭更多菜单（点击空白处）
  await page.mouse.click(10, 10)
  await page.waitForTimeout(200)

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

  // 5.1 选中元素后「取消选择」按钮变为可用
  const clearBtnEnabled = await page.locator('.rpr-review-toolbar button', { hasText: '取消选择' }).isEnabled()
  check('选中元素后「取消选择」按钮可用', clearBtnEnabled)

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

  // 8.1 弹窗打开后锁定页面滚动
  const bodyScrollLocked = await page.evaluate(() =>
    document.body.classList.contains('rpr-scroll-locked')
  )
  check('评审弹窗打开后 body 带滚动锁定类', bodyScrollLocked)
  const bodyOverflowHidden = await page.evaluate(() => {
    return window.getComputedStyle(document.body).overflow === 'hidden'
  })
  check('评审弹窗打开后 body overflow 为 hidden', bodyOverflowHidden)

  // 8.2 弹窗打开后焦点进入标题输入框
  const activeElementIsTitle = await page.evaluate(() => {
    const input = document.querySelector('.rpr-review-modal input[type="text"]')
    return input === document.activeElement
  })
  check('评审弹窗打开后标题输入框获得焦点', activeElementIsTitle)

  // 8.3 取消弹窗后焦点回到「评审」按钮
  await page.keyboard.press('Escape')
  await page.waitForSelector('.rpr-review-modal', { state: 'hidden' })
  const focusBackToReviewBtn = await page.evaluate(() => {
    const btn = document.querySelector('.rpr-review-toolbar .ant-badge button')
    return btn === document.activeElement
  })
  check('取消评审弹窗后焦点回到「评审」按钮', focusBackToReviewBtn)

  // 9. 重新打开弹窗并保存
  await page.locator('.rpr-review-toolbar .ant-badge button').click()
  await page.waitForSelector('.rpr-review-modal', { state: 'visible' })
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

  // 12. 导出 JSON（字节校验 + 真实下载事件校验：capture 监听器不能 preventDefault 下载）
  const [jsonDownload] = await Promise.all([
    page.waitForEvent('download', { timeout: 10000 }).catch(() => null),
    page.locator('.ant-dropdown-menu-item', { hasText: '导出 JSON' }).click()
  ])
  const jsonBlob = await waitBlob(page, 1)
  const jsonText = Buffer.from(jsonBlob.bytes).toString('utf8')
  let jsonOk = false
  try {
    const parsed = JSON.parse(jsonText)
    const list = Array.isArray(parsed) ? parsed : parsed.reviews || Object.values(parsed).flat()
    jsonOk = JSON.stringify(list).includes('E2E 测试标题')
  } catch {}
  check('导出 JSON 可下载且内容正确', jsonOk, `${jsonBlob.bytes.length} bytes`)
  check('导出触发真实浏览器下载事件', !!jsonDownload, jsonDownload?.suggestedFilename() || '未触发')
  // 12.1 JSON 中两个 target 均含 locators
  const jsonTwoTargetsWithLocators = mine && mine.targets.length === 2 &&
    mine.targets[0].locators &&
    mine.targets[1].locators
  check('JSON 中两个 target 均含 locators', jsonTwoTargetsWithLocators)
  // 12.2 reportInfo 自定义注入字段进入 JSON 报告；保留键 total 不可被覆盖
  let reportInfoOk = false
  try {
    const parsed = JSON.parse(jsonText)
    reportInfoOk = parsed.version === '9.9.9-e2e' &&
      parsed.channel === 'e2e' &&
      typeof parsed.total === 'number' &&
      parsed.build === null
  } catch {}
  check('JSON 报告含自定义注入字段且保留键不被覆盖', reportInfoOk)

  // 13. 导出 Markdown
  await clickMoreItem(page, '导出 Markdown')
  const mdBlob = await waitBlob(page, 2)
  const mdText = Buffer.from(mdBlob.bytes).toString('utf8')
  check('导出 Markdown 可下载且内容正确', mdText.includes('E2E 测试标题'), `${mdBlob.bytes.length} bytes`)
  // 13.1 多元素评审的 Markdown 为每个目标输出定位信息
  const mdTarget1Locator = mdText.includes('目标 1（元素）') && mdText.includes('CSS Selector')
  const mdTarget2Locator = mdText.includes('目标 2（元素）') && mdText.includes('XPath')
  check('Markdown 含第一个元素的定位信息', mdTarget1Locator)
  check('Markdown 含第二个元素的定位信息', mdTarget2Locator)
  // 13.2 Markdown 头部含 reportInfo 自定义字段；null 值与保留键不输出
  const mdReportInfo = mdText.includes('version：9.9.9-e2e') &&
    mdText.includes('channel：e2e') &&
    !mdText.includes('build：') &&
    !mdText.includes('total：999')
  check('Markdown 头部含自定义注入字段且过滤空值/保留键', mdReportInfo)

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

  // 16. 组件树抽屉（需先有选中元素，保存评审后选中已被清空，重新选一个）
  await page.click('.test-card >> nth=1')
  await page.waitForSelector('.rpr-selected-box', { state: 'visible' })
  await clickMoreItem(page, '组件树')
  await page.waitForSelector('.ant-drawer', { state: 'visible' })
  const treeText = await page.locator('.ant-drawer').first().innerText()
  check('组件树抽屉显示 DOM 树', treeText.includes('DOM 树'))
  await page.locator('.ant-drawer-close').first().click()
  await page.waitForTimeout(400)

  // 17. 无 Drawer width 弃用警告
  const widthWarn = consoleWarnings.find((w) => w.includes('width is deprecated'))
  check('无 Drawer width 弃用警告', !widthWarn, widthWarn || '')

  // 18. 混合模式滚动跟随（滚动监听与模式解耦）
  await page.evaluate(() => {
    const spacer = document.createElement('div')
    spacer.id = 'e2e-scroll-spacer'
    spacer.style.height = '2000px'
    document.body.appendChild(spacer)
  })
  // 框定视图模式框选一个区域
  await selectMode(page, '框定视图')
  const selectedModeValue = await page.locator('[data-testid="rpr-mode-select"]').inputValue()
  check('模式切换为框定视图', selectedModeValue === 'viewport', `当前选中: ${selectedModeValue}`)
  await page.mouse.move(200, 500)
  await page.mouse.down()
  await page.mouse.move(400, 650, { steps: 5 })
  await page.mouse.up()
  await page.waitForSelector('.rpr-drag-rect.rpr-selected-box', { state: 'visible' })
  // 切回元素模式选中一个元素（两种高亮共存）
  await selectMode(page, '选择元素')
  await page.click('.test-card >> nth=4')
  await page.waitForSelector('.rpr-highlight-box.rpr-selected-box', { state: 'visible' })

  const rectOf = (sel) =>
    page.evaluate((s) => {
      const el = document.querySelector(s)
      if (!el) return null
      const r = el.getBoundingClientRect()
      return { x: r.left, y: r.top, width: r.width, height: r.height }
    }, sel)
  const waitRectTop = (sel, y) =>
    page.waitForFunction(
      ([s, top]) => {
        const el = document.querySelector(s)
        return el && Math.abs(el.getBoundingClientRect().top - top) < 3
      },
      [sel, y],
      { timeout: 10000 }
    )

  const boxBefore = await rectOf('.rpr-drag-rect.rpr-selected-box')
  const elBefore = await rectOf('.rpr-highlight-box.rpr-selected-box')
  // 元素模式下滚动：框选区域也应跟随
  await page.evaluate(() => window.scrollBy(0, 300))
  await waitRectTop('.rpr-highlight-box.rpr-selected-box', elBefore.y - 300)
  const boxAfter = await rectOf('.rpr-drag-rect.rpr-selected-box')
  const elAfter = await rectOf('.rpr-highlight-box.rpr-selected-box')
  check(
    '元素模式下滚动：框选区域跟随文档',
    !!boxAfter && Math.abs(boxAfter.y - (boxBefore.y - 300)) < 3,
    boxAfter ? `Δy=${(boxAfter.y - boxBefore.y).toFixed(1)}` : '框选高亮缺失'
  )
  check(
    '元素模式下滚动：元素高亮跟随元素',
    !!elAfter && Math.abs(elAfter.y - (elBefore.y - 300)) < 3,
    elAfter ? `Δy=${(elAfter.y - elBefore.y).toFixed(1)}` : '元素高亮缺失'
  )

  // 框选模式下滚动：元素高亮也应跟随
  await selectMode(page, '框定视图')
  await page.evaluate(() => window.scrollBy(0, 300))
  await waitRectTop('.rpr-highlight-box.rpr-selected-box', elAfter.y - 300)
  const boxAfter2 = await rectOf('.rpr-drag-rect.rpr-selected-box')
  const elAfter2 = await rectOf('.rpr-highlight-box.rpr-selected-box')
  check(
    '框选模式下滚动：元素高亮跟随元素',
    !!elAfter2 && Math.abs(elAfter2.y - (elAfter.y - 300)) < 3,
    elAfter2 ? `Δy=${(elAfter2.y - elAfter.y).toFixed(1)}` : '元素高亮缺失'
  )
  check(
    '框选模式下滚动：框选区域跟随文档',
    !!boxAfter2 && Math.abs(boxAfter2.y - (boxAfter.y - 300)) < 3,
    boxAfter2 ? `Δy=${(boxAfter2.y - boxAfter.y).toFixed(1)}` : '框选高亮缺失'
  )

  // 清理：回顶部、移除撑高元素、清空选择、切回元素模式
  await page.evaluate(() => {
    window.scrollTo(0, 0)
    document.getElementById('e2e-scroll-spacer')?.remove()
  })
  await clickClearSelection(page)
  await selectMode(page, '选择元素')

  // 19. 框选/调整期间不产生原生文字选区
  await selectMode(page, '框定视图')
  const cardRect = await page.locator('.test-card >> nth=0').boundingBox()
  // 在含文字的卡片上拖拽创建框选
  await page.mouse.move(cardRect.x + 8, cardRect.y + 8)
  await page.mouse.down()
  await page.mouse.move(cardRect.x + cardRect.width - 8, cardRect.y + cardRect.height - 8, { steps: 6 })
  const userSelectDuringCreate = await page.evaluate(() => document.body.style.userSelect)
  check('拖拽创建框选期间 body userSelect 为 none', userSelectDuringCreate === 'none', userSelectDuringCreate)
  await page.mouse.up()
  await page.waitForSelector('.rpr-drag-rect.rpr-selected-box', { state: 'visible' })
  const selectionAfterCreate = await page.evaluate(() => window.getSelection().toString())
  check('拖拽创建框选不产生文字选区', selectionAfterCreate === '', selectionAfterCreate)
  const userSelectAfterCreate = await page.evaluate(() => document.body.style.userSelect)
  check('拖拽结束后 body userSelect 已恢复', userSelectAfterCreate !== 'none', userSelectAfterCreate || '（空）')

  // 拖拽已有框选的右下角调整手柄（StrictMode dev 下同一次拖拽会产生两个重叠框选，取其一即可）
  const seHandle = await page
    .locator('.rpr-drag-rect.rpr-selected-box .rpr-resize-handle.rpr-handle-se')
    .first()
    .boundingBox()
  await page.mouse.move(seHandle.x + seHandle.width / 2, seHandle.y + seHandle.height / 2)
  await page.mouse.down()
  await page.mouse.move(seHandle.x + seHandle.width / 2 + 80, seHandle.y + seHandle.height / 2 + 80, { steps: 6 })
  const selectionDuringResize = await page.evaluate(() => window.getSelection().toString())
  check('调整框选尺寸不产生文字选区', selectionDuringResize === '', selectionDuringResize)
  await page.mouse.up()
  const userSelectAfterResize = await page.evaluate(() => document.body.style.userSelect)
  check('调整结束后 body userSelect 已恢复', userSelectAfterResize !== 'none', userSelectAfterResize || '（空）')

  // 清理：清空框选、切回元素模式
  await clickClearSelection(page)
  await selectMode(page, '选择元素')

  // 20. 截图期间隐藏评审 UI（导出截图纯净）
  await page.click('.test-card >> nth=0')
  await page.waitForSelector('.rpr-highlight-box.rpr-selected-box', { state: 'visible' })
  await page.locator('.rpr-review-toolbar .ant-badge button').click()
  await page.waitForSelector('.rpr-review-modal', { state: 'visible' })
  await page.locator('.rpr-review-modal .ant-checkbox-wrapper', { hasText: '完整页面' }).click()
  await page.waitForFunction(
    () => {
      const w = Array.from(document.querySelectorAll('.rpr-review-modal .ant-checkbox-wrapper'))
        .find((el) => el.textContent.includes('完整页面'))
      return !!w?.querySelector('input')?.checked
    },
    null,
    { timeout: 5000 }
  )
  check('勾选「完整页面」截图选项', true)
  await page.getByPlaceholder('例如：按钮样式不统一').fill('E2E 截图评审')
  await page.getByPlaceholder('描述问题现象、影响和改进建议').fill('E2E 截图建议')
  await page.getByRole('button', { name: /保存评审/ }).click()
  // 断言：截图生成期间 overlay 被隐藏，高亮由截图模块手动绘制
  await page.waitForFunction(() => (window.__uiDisplayLog || []).includes('none'), null, {
    timeout: 15000
  })
  check('保存评审截图期间 overlay 曾隐藏（display:none）', true)
  // 弹窗消失不等于保存完成；以记录落盘为完成信号
  const savedWithShot = await page
    .waitForFunction(
      () => {
        const raw = localStorage.getItem('page-reviews')
        if (!raw) return false
        const list = JSON.parse(raw)
        const reviews = Array.isArray(list) ? list : Object.values(list).flat()
        const r = reviews.find((x) => x.title === 'E2E 截图评审')
        return !!(
          r &&
          r.screenshots?.some(
            (s) => s.type === 'fullpage' && s.data && s.data.startsWith('data:image/png')
          )
        )
      },
      null,
      { timeout: 20000 }
    )
    .then(() => true)
    .catch(() => false)
  check('评审记录落盘且含完整页面截图数据', savedWithShot)
  const overlayRestored = await page.evaluate(() => {
    const el = document.querySelector('.rpr-review-overlay')
    return el ? el.style.display !== 'none' : false
  })
  check('截图完成后 overlay 显示已恢复', overlayRestored)

  // 导出 ZIP 并解码其中的完整页面 PNG（PNG 头 + IHDR 尺寸断言）
  await clickMoreItem(page, '导出 ZIP')
  const zipBlobPng = await waitBlob(page, 4)
  const JSZip = require('jszip')
  const zip = await JSZip.loadAsync(Buffer.from(zipBlobPng.bytes))
  const pngNames = Object.keys(zip.files).filter((n) => /images\/screenshot-fullpage-.*\.png$/.test(n))
  check('ZIP 内含完整页面截图文件', pngNames.length > 0, pngNames.join(','))
  let pngOk = false
  let pngInfo = ''
  if (pngNames.length > 0) {
    const png = await zip.files[pngNames[0]].async('nodebuffer')
    const isPng =
      png.length > 24 && png[0] === 0x89 && png[1] === 0x50 && png[2] === 0x4e && png[3] === 0x47
    const w = isPng ? png.readUInt32BE(16) : 0
    const h = isPng ? png.readUInt32BE(20) : 0
    pngOk = isPng && w > 0 && h > 0
    pngInfo = `${w}x${h}, ${png.length} bytes`
  }
  check('完整页面截图为合法 PNG 且尺寸有效', pngOk, pngInfo)

  // 21. 滚动场景下的截图：保留滚动位置且高亮与目标对齐
  await page.evaluate(() => {
    const spacer = document.createElement('div')
    spacer.id = 'rpr-test-spacer'
    spacer.style.height = '1200px'
    spacer.style.background = '#f0f0f0'
    document.body.appendChild(spacer)
  })
  await page.waitForTimeout(100)
  await page.locator('.test-card >> nth=3').scrollIntoViewIfNeeded()
  await page.click('.test-card >> nth=3')
  await page.waitForSelector('.rpr-selected-box', { state: 'visible' })
  await page.locator('.rpr-review-toolbar .ant-badge button').click()
  await page.waitForSelector('.rpr-review-modal', { state: 'visible' })
  await page.locator('.rpr-review-modal .ant-checkbox-wrapper', { hasText: '当前视口' }).click()
  await page.locator('.rpr-review-modal .ant-checkbox-wrapper', { hasText: '完整页面' }).click()
  await page.getByPlaceholder('例如：按钮样式不统一').fill('E2E 滚动截图评审')
  await page.getByPlaceholder('描述问题现象、影响和改进建议').fill('E2E 滚动截图建议')
  await page.getByRole('button', { name: /保存评审/ }).click()

  const scrollReview = await page.waitForFunction(
    () => {
      const raw = localStorage.getItem('page-reviews')
      if (!raw) return null
      const list = JSON.parse(raw)
      const reviews = Array.isArray(list) ? list : Object.values(list).flat()
      return reviews.find((x) => x.title === 'E2E 滚动截图评审') || null
    },
    null,
    { timeout: 20000 }
  )
  const scrollRecord = await scrollReview.jsonValue()
  const scrollTarget = scrollRecord.targets[0]
  const expectedRect = scrollTarget?.elementRect || scrollTarget?.viewportRect
  const fpShot = scrollRecord.screenshots.find((s) => s.type === 'fullpage')
  const vpShot = scrollRecord.screenshots.find((s) => s.type === 'viewport')

  const shotInfo = await page.evaluate(({ fpUrl, vpUrl }) => {
    return new Promise((resolve) => {
      const load = (url, cb) => {
        const img = new Image()
        img.onload = () => cb(img)
        img.src = url
      }
      load(fpUrl, (fpImg) => {
        load(vpUrl, (vpImg) => {
          resolve({
            fullPageWidth: fpImg.width,
            fullPageHeight: fpImg.height,
            viewportWidth: vpImg.width,
            viewportHeight: vpImg.height
          })
        })
      })
    })
  }, { fpUrl: fpShot.data, vpUrl: vpShot.data })

  check('滚动后完整页面截图高度大于视口高度', shotInfo.fullPageHeight > 800, `${shotInfo.fullPageHeight}`)
  check('滚动后当前视口截图高度等于视口高度', shotInfo.viewportHeight === 800, `${shotInfo.viewportHeight}`)

  const highlightCheck = await page.evaluate(({ url, docX, docY, width, height }) => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0)
        const scale = img.width / document.documentElement.scrollWidth
        const x = Math.round((docX + width / 2) * scale)
        const expectedYTop = Math.round(docY * scale)
        const expectedYBottom = Math.round((docY + height) * scale)
        const isRed = (r, g, b) => r > 200 && g < 150 && b < 150

        // 扫描中轴线上的红色像素，收集所有红色区间
        const redRanges = []
        let rangeStart = -1
        for (let y = 0; y < canvas.height; y++) {
          const pixel = ctx.getImageData(x, y, 1, 1).data
          if (isRed(pixel[0], pixel[1], pixel[2])) {
            if (rangeStart === -1) rangeStart = y
          } else if (rangeStart !== -1) {
            redRanges.push([rangeStart, y - 1])
            rangeStart = -1
          }
        }
        if (rangeStart !== -1) redRanges.push([rangeStart, canvas.height - 1])

        // 验证存在分别靠近期望顶部和底部的红色区间（高亮框上下边框）
        const topMatch = redRanges.find((r) => Math.abs(r[0] - expectedYTop) <= 2)
        const bottomMatch = redRanges.find((r) => Math.abs(r[1] - expectedYBottom) <= 2)

        resolve({
          expectedYTop,
          expectedYBottom,
          actualYTop: topMatch ? topMatch[0] : -1,
          actualYBottom: bottomMatch ? bottomMatch[1] : -1,
          redRanges: redRanges.slice(0, 5),
          scale,
          aligned: !!topMatch && !!bottomMatch
        })
      }
      img.src = url
    })
  }, { url: fpShot.data, docX: expectedRect.x, docY: expectedRect.y, width: expectedRect.width, height: expectedRect.height })

  check(
    '滚动后完整页面截图中高亮框与目标对齐',
    highlightCheck.aligned,
    `expected=${highlightCheck.expectedYTop}~${highlightCheck.expectedYBottom}, actual=${highlightCheck.actualYTop}~${highlightCheck.actualYBottom}, ranges=${JSON.stringify(highlightCheck.redRanges)}, scale=${highlightCheck.scale}`
  )

  await page.evaluate(() => {
    const spacer = document.getElementById('rpr-test-spacer')
    if (spacer) spacer.remove()
  })

  // 22. 无页面级 JS 错误
  check('无页面 JS 错误', pageErrors.length === 0, pageErrors.join(' | '))

  await browser.close()

  const failed = results.filter((r) => !r.ok)
  console.log(`\n共 ${results.length} 项, 通过 ${results.length - failed.length}, 失败 ${failed.length}`)
  process.exit(failed.length ? 1 : 0)
})().catch((e) => {
  console.error('脚本异常:', e)
  process.exit(1)
})
