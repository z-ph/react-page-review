## MODIFIED Requirements

### Requirement: 评审弹窗打开时锁定页面滚动
WHEN 评审弹窗、组件树抽屉、评审列表抽屉或删除确认弹窗处于打开状态,
THEN 系统 SHALL 禁止底层页面滚动
AND 关闭所有弹窗/抽屉后 SHALL 恢复页面滚动能力。

#### Scenario: 打开评审弹窗后页面无法滚动
GIVEN 页面高度超过视口高度且用户已向下滚动
WHEN 用户点击工具栏「评审」按钮打开添加评审弹窗
THEN `document.body` 的 `overflow` 变为 `hidden`
AND 鼠标滚轮不再滚动底层页面。

#### Scenario: 关闭所有弹窗后恢复滚动
GIVEN 评审弹窗已打开且页面滚动被锁定
WHEN 用户关闭评审弹窗
THEN `document.body` 的 `overflow` 恢复为弹窗打开前的值
AND 页面可以再次滚动。

### Requirement: 评审弹窗打开时焦点进入弹窗
WHEN 评审弹窗或确认弹窗打开,
THEN 系统 SHALL 将键盘焦点移动到弹窗内第一个可交互元素
AND 按 Tab 键 SHALL 在弹窗内可交互元素之间循环。

#### Scenario: 打开评审弹窗后标题输入框获得焦点
GIVEN 用户已选中至少一个元素
WHEN 用户点击工具栏「评审」按钮
THEN 弹窗内标题输入框成为 `document.activeElement`。

#### Scenario: 打开删除确认弹窗后确定按钮获得焦点
GIVEN 用户点击某条评审意见的删除按钮
WHEN 删除确认弹窗出现
THEN 弹窗内「确定」按钮成为 `document.activeElement`。

### Requirement: 关闭弹窗后恢复焦点到触发元素
WHEN 用户关闭评审弹窗或确认弹窗,
THEN 系统 SHALL 将焦点恢复到打开该弹窗前的触发元素上。

#### Scenario: 关闭评审弹窗后焦点回到评审按钮
GIVEN 用户从工具栏「评审」按钮打开弹窗
WHEN 用户取消或保存后弹窗关闭
THEN 工具栏「评审」按钮重新获得焦点。

## ADDED Requirements

None.

## REMOVED Requirements

None.
