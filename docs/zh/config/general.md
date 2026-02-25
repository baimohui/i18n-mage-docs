# 通用配置

## `i18n-mage.general.enable`

- **类型**: `boolean`
- **默认值**: `true`

是否启用 i18n Mage 主功能。关闭后，插件相关视图、检测和操作命令都不会继续工作。

## `i18n-mage.general.previewChanges`

- **类型**: `boolean`
- **默认值**: `true`

是否在“修复 / 导入”等会批量改动语言文件的操作前展示预览面板。建议保持开启，避免误改大量词条。

## `i18n-mage.general.enableDiagnostics`

- **类型**: `boolean`
- **默认值**: `true`

启用诊断能力：在编辑器中标记未定义词条并提供快捷修复入口。若你不希望编辑器出现相关问题提示，可关闭。

## `i18n-mage.general.displayLanguage`

- **类型**: `string`
- **默认值**: VsCode 默认语言

设置“显示语言”（用于内联提示与补全文案展示）。留空时会根据 VS Code 当前语言环境和项目语言自动选择。

## `i18n-mage.general.enableDebugLog`

- **类型**: `boolean`
- **默认值**: `false`

启用调试日志，插件会在 `i18n Mage` 输出通道打印关键执行过程与结果。排查配置、路径、翻译调用问题时建议临时开启。

## `i18n-mage.general.sortOnExport`

- **类型**: `enum`
- **默认值**: `byKey`

导出翻译为表格时的排序规则，支持以下选项：

- `none`: 不排序
- `byKey`: 按词条键名首字母排序
- `byPosition`: 按词条首次出现的源文件位置排序
