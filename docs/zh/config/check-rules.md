# 检查规则配置

## `i18n-mage.analysis.languageFileParser`

- **类型**：`enum`
- **默认值**：`auto`

用于选择语言文件的解析方式，支持以下选项：

- `json5`：JSON5 解析器（严格但安全）
- `eval`：eval 解析器（宽松但风险）
- `auto`：自动选择（优先 JSON5，若文件格式不兼容则降级为 eval）

## `i18n-mage.analysis.onSave`

- **类型**：`boolean`
- **默认值**：`true`

启用时，每次保存文件都会触发全局词条检查。内置防抖机制，避免频繁触发。

## `i18n-mage.analysis.scanStringLiterals`

- **类型**：`boolean`
- **默认值**：`true`

在统计词条使用信息时，是否扫描代码中的字符串文本。启用后，将识别文件中字符串类型的值作为可能被使用的 key；关闭则仅分析 t() 等国际化函数的参数。

## `i18n-mage.analysis.ignoreCommentedCode`

- **类型**：`boolean`
- **默认值**：`false`

在统计词条使用信息时，是否忽略被注释掉的代码。

## `i18n-mage.analysis.syncBasedOnReferredEntries`

- **类型**：`boolean`
- **默认值**：`false`

配置词条同步的基准来源：启用时，仅以参考语言文件中定义的词条为基准。关闭时，综合所有语言文件中定义的词条为准（适用于需要严格保持与参考语言一致性的项目）。

## `i18n-mage.analysis.fileSizeSkipThresholdKB`

- **类型**：`number`
- **默认值**：`100`

设置文件大小阈值（单位：KB），超过该阈值将跳过分析。