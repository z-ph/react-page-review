## MODIFIED Requirements

### Requirement: 评审列表抽屉头部操作区
WHEN 用户打开评审列表抽屉
THEN 抽屉头部 SHALL 只显示一个「操作」下拉按钮（click 触发）
AND 下拉菜单 SHALL 包含：导出 Markdown、导出 JSON、导出 ZIP、清空本页（danger）
AND 各操作行为 SHALL 与原来的平铺按钮完全一致
AND 抽屉关闭按钮 SHALL 始终可点击，不被头部操作区遮挡

#### Scenario: antd v5 宿主下关闭抽屉
GIVEN 宿主使用 antd v5（Drawer size 数字不生效，宽度为默认 378px）
WHEN 用户打开评审列表抽屉
THEN 关闭按钮可见且可点击
AND 点击后抽屉正常关闭

#### Scenario: 抽屉内导出
GIVEN 评审列表抽屉已打开且存在评审记录
WHEN 用户点击「操作」下拉并选择「导出 JSON」
THEN 系统触发 JSON 导出（与工具栏「更多」中的导出一致）
