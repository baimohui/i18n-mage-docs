# 仅限工作区配置
注意：以下配置仅适用于当前工作区（`scope: resource`），请不要写入用户级设置。

## `i18n-mage.workspace.projectPath`
- 类型：`string`
- 默认值：`""`
- 说明：设置项目根目录路径。

## `i18n-mage.workspace.languagePath`
- 类型：`string`
- 默认值：`""`
- 说明：设置语言文件目录路径。

## `i18n-mage.workspace.manuallyMarkedUsedEntries`
- 类型：`string[]`
- 默认值：`[]`
- 说明：手动标记为“已使用”的词条列表。

## `i18n-mage.workspace.ignoredFiles`
- 类型：`string[]`
- 默认值：`[]`
- 说明：忽略扫描的文件列表。

## `i18n-mage.workspace.ignoredDirectories`
- 类型：`string[]`
- 默认值：`[]`
- 说明：忽略扫描的目录列表。

## `i18n-mage.workspace.ignoredLanguages`
- 类型：`string[]`
- 默认值：`[]`
- 说明：忽略处理的语言文件列表。

## `i18n-mage.workspace.ignoredUndefinedEntries`
- 类型：`string[]`
- 默认值：`[]`
- 说明：忽略的未定义词条列表。

## `i18n-mage.workspace.extractScopeWhitelist`
- 类型：`string[]`
- 默认值：`[]`
- 说明：硬编码文案提取范围白名单，支持文件和目录路径。配置后仅在白名单范围内扫描。

## `i18n-mage.workspace.extractScopeBlacklist`
- 类型：`string[]`
- 默认值：`[]`
- 说明：硬编码文案提取范围黑名单，支持文件和目录路径。配置后会在扫描时排除这些路径。
