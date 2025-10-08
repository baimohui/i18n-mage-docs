# 自动补全配置

## `i18n-mage.completion.enable`

- **类型**: `boolean`
- **默认值**: `true`

是否启用 Key 自动补全。

## `i18n-mage.completion.displayLanguageSource`

- **类型**: `enum`
- **默认值**: `source`

自动补全时显示的翻译语言，支持以下选项：

- `source`: 翻译源语言
- `display`: 显示语言

## `i18n-mage.completion.matchScope`

- **类型**: `enum`
- **默认值**: `both`

控制输入时的匹配范围，支持以下选项：

- `key`: 仅匹配翻译键
- `value`: 仅匹配翻译文案
- `both`: 同时匹配翻译键和翻译文案

## `i18n-mage.completion.pinyinSearch`

- **类型**: `enum`
- **默认值**: `off`

启用中文翻译文案的拼音搜索模式，支持以下选项：

- `off`: 关闭
- `full`: 启用完整拼音搜索（如 'queding'）
- `abbr`: 启用拼音首字母搜索（如 'qd'）
- `both`: 同时启用完整拼音和拼音首字母搜索
