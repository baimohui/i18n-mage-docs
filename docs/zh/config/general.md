# 通用配置

## `i18n-mage.general.enable`

- **类型**: `boolean`
- **默认值**: `true`

启用插件功能。

## `i18n-mage.general.previewChanges`

- **类型**: `boolean`
- **默认值**: `true`

启用翻译更改预览功能。开启后，在修复或导入翻译时，插件会先显示待更改的词条数据，供您确认或调整修改内容后再应用。

## `i18n-mage.general.displayLanguage`

- **类型**: `string`
- **默认值**: VsCode 默认语言

指定内联翻译提示和信息面板的默认语言来源。

## `i18n-mage.general.fileExtensions`

- **类型**: `array`
- **默认值**: `[ ".js", ".ts", ".jsx", ".tsx", ".vue", ".html", ".json" ]`

指定需要扫描的文件扩展名。

## `i18n-mage.general.sortOnExport`

- **类型**: `enum`
- **默认值**: `byKey`

导出翻译为表格时的排序规则，支持以下选项：

- `none`: 不排序
- `byKey`: 按词条键名首字母排序
- `byPosition`: 按词条首次出现的源文件位置排序

