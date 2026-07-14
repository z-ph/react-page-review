## ADDED Requirements

### Requirement: 框选操作不产生页面文字选区
WHEN 用户在框定视图模式下拖拽创建框选区域，或拖拽手柄调整已有框选范围
THEN 页面上的文字 SHALL NOT 被浏览器原生选中
AND 拖拽结束后页面的文字可选状态 SHALL 恢复为操作前的状态

#### Scenario: 拖拽创建框选不选中文字
GIVEN 评审模式已激活且处于框定视图模式
WHEN 用户在包含文字的页面内容上按下鼠标并拖拽形成框选区域
THEN 框选区域正常创建
AND `window.getSelection()` 为空选区

#### Scenario: 调整框选尺寸不选中文字
GIVEN 页面已存在一个框选区域
WHEN 用户拖拽该框选的尺寸调整手柄
THEN 框选范围正常调整
AND `window.getSelection()` 为空选区
AND 拖拽结束后 `document.body` 的 user-select 恢复为操作前状态
