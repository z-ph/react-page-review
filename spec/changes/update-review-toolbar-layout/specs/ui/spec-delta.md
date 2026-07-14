## MODIFIED Requirements

### Requirement: 工具栏提供外露的「取消选择」按钮
WHEN 用户进入评审模式,
THEN 工具栏 SHALL 直接展示「取消选择」按钮
AND 未选中任何元素/框选时该按钮 SHALL 禁用
AND 点击后 SHALL 清空所有选中状态。

#### Scenario: 选中元素后点击外露的取消选择按钮
GIVEN 用户已选中至少一个元素
WHEN 用户点击工具栏上的「取消选择」按钮
THEN 所有高亮框和选中状态被清空
AND 工具栏上选中计数变为 0。

#### Scenario: 未选中时取消选择按钮禁用
GIVEN 用户未选中任何元素或框选
WHEN 查看工具栏
THEN 「取消选择」按钮为禁用状态。

### Requirement: 模式切换由 Tabs 改为下拉选择
WHEN 用户需要切换「选中元素」与「框定视图」模式,
THEN 工具栏 SHALL 提供下拉选择器而非 Radio Tab 组
AND 下拉中 SHALL 包含「选中元素」与「框定视图」两个选项
AND 切换后 SHALL 立即生效。

#### Scenario: 通过下拉切换到框定视图模式
GIVEN 用户当前处于「选中元素」模式
WHEN 用户从工具栏下拉选择「框定视图」
THEN 模式切换为框定视图
AND 页面进入框选交互状态。

#### Scenario: 通过下拉切换到选中元素模式
GIVEN 用户当前处于「框定视图」模式
WHEN 用户从工具栏下拉选择「选中元素」
THEN 模式切换为元素选择
AND 页面恢复元素悬停/点击选择交互。

### Requirement: 「更多」下拉菜单不再包含取消选择
WHEN 用户打开「更多」下拉菜单,
THEN 菜单项 SHALL NOT 包含「取消选择」
AND 仍 SHALL 包含组件树、评审列表、导出等原有功能。

#### Scenario: 打开更多下拉菜单检查项
GIVEN 用户点击「更多」按钮
WHEN 下拉菜单展开
THEN 菜单中不存在「取消选择」项
AND 仍存在「评审列表」与导出选项。

## ADDED Requirements

None.

## REMOVED Requirements

None.
