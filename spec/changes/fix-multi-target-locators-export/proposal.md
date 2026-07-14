# Proposal: 修复多元素评审时定位信息只显示一个的问题

## Change ID

`fix-multi-target-locators-export`

## Why

当前 `ReviewTool` 支持同时选中多个元素发起一条评审。`buildTargets` 会为每个目标元素记录各自的 `locators`（cssSelector、xpath、aria、testId）和 `elementRect`。

但 `openReviewForm` 仅在评审记录顶层保存了第一个元素的 `locators` 和 `aria`，而 `buildMarkdown` 导出报告时也仅读取顶层的 `item.locators`。因此当用户选中多个元素后：

- 弹窗内「评审目标」只展示标签，没有展示每个目标的定位信息；
- 导出的 Markdown/JSON 中「定位信息」只有第一个元素，其余元素的 selector、xpath 等丢失；
-  ZIP 报告中的 `review.md` 同样只包含一条定位信息。

这导致多元素评审的导出结果不完整，影响问题追溯和自动化定位。

## What Changes

1. **按目标展示定位信息**
   - 修改 `src/useReview.js` 中的 `buildMarkdown`，在遍历 `item.targets` 时为每个元素目标输出其独立的定位信息（cssSelector、xpath、aria role、accessibleName、data-testid）。
   - 如果目标本身没有 locators，则跳过该目标的定位信息段落。

2. **保留顶层定位信息（向后兼容）**
   - 不删除评审记录顶层的 `locators` 字段，旧数据导出的报告仍可正常显示。
   - 当所有目标都没有自己的 locators 时，回退到顶层 `item.locators`。

3. **弹窗目标摘要增强（可选）**
   - 在 `ReviewTool.jsx` 的评审弹窗中，为每个目标标签增加 title/tooltip，hover 时显示对应 selector 或 rect，提升弹窗内可读性。

4. **新增 e2e 断言**
   - 同时选中两个不同元素并保存评审，导出 Markdown 后断言两份定位信息均出现。
   - 断言 JSON 导出中两个 target 均包含 locators。

## Impact

- **代码**：`src/useReview.js`、可能涉及 `src/ReviewTool.jsx`、 `test-react-e2e.cjs`
- **行为**：多元素评审的 Markdown/JSON/ZIP 报告为每个元素输出定位信息
- **数据格式**：不破坏现有评审记录结构；新增按目标输出，保留顶层字段兼容旧数据
- **无破坏性变更**

## 验证

- `react-test-app` 端到端用例新增多元素评审导出场景：
  - 选中两个不同元素保存评审
  - 导出 Markdown，断言两个元素的 selector/locator 均存在
  - 导出 JSON，断言 `targets[0].locators` 与 `targets[1].locators` 均存在
  - 既有 40 项 e2e 全部保持通过
