# react-page-review 开发规范

本仓库采用规范驱动开发（Spec-Driven Development）。任何影响行为、UI、API 或测试的代码变更，在实施前必须先创建 openspec 提案并获得认可。

## 强制工作流

### 1. 变更前必须先建提案

不要直接写实现代码。先按 `openspec-proposal-creation-cn` skill 的格式，在 `spec/changes/<change-id>/` 下创建：

```
spec/changes/{change-id}/
├── proposal.md
├── tasks.json
└── specs/{capability}/spec-delta.md
```

| 文件 | 作用 |
|---|---|
| `proposal.md` | Why / What Changes / Impact / Verification |
| `tasks.json` | 编号的实施清单，每个 step 标记 `completed` 与 `passes` |
| `specs/{capability}/spec-delta.md` | 用 EARS 格式编写的需求差异（ADDED / MODIFIED / REMOVED）|

### 2. Change ID 命名

使用 URL 安全、具描述性的 kebab-case：

- `add-<feature>`：新增功能
- `fix-<issue>`：修复问题
- `update-<component>`：行为调整或重构
- `remove-<feature>`：移除功能

创建前先检查是否冲突：

```bash
ls spec/changes/ | grep -i "<proposed-id>"
```

### 3. 提案内容要求

- **proposal.md** 必须包含：Change ID、Why、What Changes、Impact、Verification。
- **spec-delta.md** 必须包含 `## ADDED Requirements` / `## MODIFIED Requirements` / `## REMOVED Requirements` 中至少一个，且每个 Requirement 下面要有 `#### Scenario:` 场景。
- **tasks.json** 任务数量通常在 3–10 个之间，必须包含测试/验证任务。

### 4. 用户认可后再实施

提案写完后，向用户展示摘要，等用户回复后再开始写代码。常用口令：

- "请评审提案"
- "如认可，回复 'openspec开发' 或 '按顺序完成任务' 开始实施"

### 5. 实施与验证

- 按 `tasks.json` 的顺序逐个完成任务，并及时更新 `completed` / `passes`。
- 所有代码变更必须能通过现有 e2e：

```bash
pnpm build
# 在 examples/react-test-app 启动 dev server 后
BASE_URL=http://localhost:<port> NODE_PATH=$(npm root -g) node test-react-e2e.cjs
```

- 变更涉及构建产物时，必须运行 `pnpm build` 更新 `dist/`。
- 完成后在回复中给出验证结果（通过项数 / 失败项数）。

### 6. 例外

以下情况可快速处理，但仍建议在回复中简要说明：

- 纯文档 typo 修正
- 不影响行为的注释调整
- 已批准的提案中某个 step 的小幅修正

任何涉及行为、UI、API、数据格式、截图、导出、事件监听、样式作用域的变更，**不允许跳过提案**。

## 参考

- 示例提案：`spec/changes/fix-highlight-scroll-and-screenshot-cleanup/`
- 最新补建提案：`spec/changes/fix-screenshot-preserve-highlights/`
- Skill：`openspec-proposal-creation-cn`
