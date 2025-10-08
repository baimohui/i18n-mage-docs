# 写入规则配置

## `i18n-mage.writeRules.sortRule`

- **类型**：`enum`
- **默认值**：`none`

语言文件写入时的排序规则（仅对扁平结构生效），支持以下选项：

- `none`：不排序。
- `byKey`: 按词条键名首字母排序。
- `byPosition`: 按词条首次出现的源文件位置排序。

## `i18n-mage.writeRules.sortAfterFix`

- **类型**：`boolean`
- **默认值**：`false`

修复时是否对词条进行排序。

## `i18n-mage.writeRules.keyPrefix`

- **类型**：`enum`
- **默认值**：`none`

用于生成 key 的前缀，支持以下选项：

- `none`：不添加前缀
- `manual-selection`：手动选择前缀
- `auto-popular`：自动选择最常见前缀

## `i18n-mage.writeRules.generatedKeyStrategy`

- **类型**：`enum`
- **默认值**：`english`

设置生成的翻译键名策略，支持以下选项：

- `english`：使用英文翻译生成 key（非英文文案会调用翻译服务）
- `pinyin`：使用拼音生成 key

## `i18n-mage.writeRules.generatedKeyStyle`

- **类型**：`enum`
- **默认值**：`camelCase`

设置生成的翻译键名风格，支持以下选项：

- `camelCase`：驼峰式
- `snake_case`：下划线式
- `PascalCase`：帕斯卡式
- `kebab-case`：短横线式
- `raw`：保持原样

## `i18n-mage.writeRules.languageFileIndent`

- **类型**：`number`
- **默认值**：`null`

写入语言文件时使用的缩进空格数。若未设置，将自动根据现有文件内容推断缩进大小。

## `i18n-mage.writeRules.maxGeneratedKeyLength`

- **类型**：`number`
- **默认值**：`40`

生成的 key 的最大长度。超出限制时，将使用“文件名 + Text + 序号”的形式生成 key。若仍超出限制，将截断文件名以满足长度要求。

## `i18n-mage.writeRules.quoteStyleForKey`

- **类型**：`enum`
- **默认值**：`auto`

设置写入时 key 的引号风格，支持以下选项：

- `auto`：自动检测并统一引号风格
- `single`：单引号
- `double`：双引号
- `none`：不使用引号

## `i18n-mage.writeRules.quoteStyleForValue`

- **类型**：`enum`
- **默认值**：`auto`

设置写入时 value 的引号风格，支持以下选项：

- `auto`：自动检测并统一引号风格
- `single`：单引号
- `double`：双引号

## `i18n-mage.writeRules.stopWords`

- **类型**：`array`
- **默认值**：`["the"]`

停用词列表，用于生成 key 时剔除多余的无效词汇。

## `i18n-mage.writeRules.enableKeyTagRule` (Deprecated)️

> **⚠️ 弃用警告**: 此配置将停止维护，并计划在后续版本中移除。

- **类型**：`boolean`
- **默认值**：`false`

启用未定义词条自动翻译功能时，用以自定义新增的词条名称：通过 `%key%text` 格式的词条命名规则，自动将占位内容作为词条 key

```html
<div>{{$t("%customEntry%测试")}}</div>
```

例如在修复上面这段代码中，插件会新写入一个名称为 `customEntry` 的词条，并自动翻译为 `测试`。

另外，如果自定义的 key 已存在，插件将会强制覆盖原有词条内容。

## `i18n-mage.writeRules.enablePrefixTagRule` (Deprecated)️

> **⚠️ 弃用警告**: 此配置将停止维护，并计划在后续版本中移除。

- **类型**：`boolean`
- **默认值**：`false`

启用未定义词条自动翻译功能时，用以自定义新增的词条名称前缀：通过 `#prefix#text` 格式的词条命名规则，自动将占位内容作为词条 key 的前缀。

```html
<div>{{$t("#customPrefix#测试")}}</div>
```

例如在修复上面这段代码中，插件可能会新写入一个名称为 `customPrefix.test` 的词条，并自动翻译为 `测试`。