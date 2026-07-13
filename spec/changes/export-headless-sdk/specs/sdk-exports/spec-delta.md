# Spec Delta: SDK 导出面

## ADDED Requirements

### Requirement: 无头工具函数导出
系统 SHALL 从包入口导出元素检查与截图工具函数,
AND 不强制宿主使用 ReviewTool 组件即可构建自定义评审 UI。

#### Scenario: 导入 inspector 工具
GIVEN 宿主已安装 react-page-review
WHEN 宿主执行 `import { getNodeInfo } from 'react-page-review'`
THEN 导入成功且函数行为与 ReviewTool 内部使用的一致。

#### Scenario: 导入 screenshot 工具
GIVEN 宿主已安装 react-page-review
WHEN 宿主执行 `import { captureElement, captureViewport } from 'react-page-review'`
THEN 导入成功且可生成截图 dataURL。

#### Scenario: 向后兼容
GIVEN 宿主仍使用 `import { ReviewTool, usePageReview } from 'react-page-review'`
WHEN 升级到 0.6.0
THEN 原有导入与行为不受影响。
