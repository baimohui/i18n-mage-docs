# 硬编码文案提取配置
本文说明与“提取硬编码文案”直接相关的配置项。

## 扫描范围

### `i18n-mage.extract.fileExtensions`
- 类型：`string[]`
- 默认值：`[".js", ".ts", ".jsx", ".tsx", ".mjs", ".cjs", ".vue"]`
- 说明：提取扫描的文件后缀列表。

### `i18n-mage.workspace.extractScopeWhitelist`
- 类型：`string[]`
- 默认值：`[]`
- 说明：提取范围白名单（支持文件/目录）。配置后仅在白名单内扫描。

### `i18n-mage.workspace.extractScopeBlacklist`
- 类型：`string[]`
- 默认值：`[]`
- 说明：提取范围黑名单（支持文件/目录）。黑名单路径会被排除。

## 生成调用代码

### `i18n-mage.extract.jsTsFunctionName`
- 类型：`string`
- 默认值：`"t"`
- 说明：JS/TS 文件中的国际化函数名。

### `i18n-mage.extract.vueTemplateFunctionName`
- 类型：`string`
- 默认值：`"t"`
- 说明：Vue Template 中的国际化函数名。

### `i18n-mage.extract.vueScriptFunctionName`
- 类型：`string`
- 默认值：`"t"`
- 说明：Vue Script 中的国际化函数名。

### `i18n-mage.extract.jsTsImportLines`
- 类型：`string[]`
- 默认值：`[]`
- 说明：JS/TS 需要插入的导入语句（多行数组）。

### `i18n-mage.extract.jsTsSetupLines`
- 类型：`string[]`
- 默认值：`[]`
- 说明：JS/TS 需要插入的初始化语句（多行数组）。

### `i18n-mage.extract.vueScriptImportLines`
- 类型：`string[]`
- 默认值：`[]`
- 说明：Vue Script 需要插入的导入语句（多行数组）。

### `i18n-mage.extract.vueScriptSetupLines`
- 类型：`string[]`
- 默认值：`[]`
- 说明：Vue Script 需要插入的初始化语句（多行数组）。

## 提取过滤规则

### `i18n-mage.extract.onlyExtractSourceLanguageText`
- 类型：`boolean`
- 默认值：`true`
- 说明：当源语言字符特征可识别时，仅提取符合源语言字符特征的文本。

### `i18n-mage.extract.vueTemplateIncludeAttrs`
- 类型：`string[]`
- 默认值：`[]`
- 说明：Vue Template 属性提取白名单。仅提取这些属性中的文本。

### `i18n-mage.extract.vueTemplateExcludeAttrs`
- 类型：`string[]`
- 默认值：`["key", "ref", "prop", "value", "class", "style", "id", "for", "type", "name", "src", "href", "to"]`
- 说明：Vue Template 属性提取黑名单。命中属性会被排除。

## 相关配置
- `i18n-mage.i18nFeatures.framework`：影响提取向导中的框架行为和代码模板。
- `i18n-mage.writeRules.*`：影响生成 key 的策略、命名风格与写入格式。
- `i18n-mage.translationServices.referenceLanguage`：作为源语言判断参考。
