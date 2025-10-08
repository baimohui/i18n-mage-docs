# 翻译内联提示配置

## `i18n-mage.translationHints.enable`

- **类型**：`boolean`
- **默认值**：`true`

启用翻译内联提示功能。

## `i18n-mage.translationHints.enableLooseKeyMatch`

- **类型**：`boolean`
- **默认值**：`true`

启用对动态拼接的词条（如 t(`prefix.${key}.suffix`)）进行模糊匹配装饰。匹配多个翻译时，仅显示第一个匹配结果。建议仅在项目中广泛使用此类写法时开启，可能存在误判。

## `i18n-mage.translationHints.maxLength`

- **类型**：`number`
- **默认值**：`40`

设置内联提示的最大长度。超出长度时，将截断显示。

## `i18n-mage.translationHints.light.fontColor`

- **类型**：`string`
- **默认值**：`#2E7D9A`

设置浅色主题下提示文字颜色（十六进制）。

## `translationHints.light.backgroundColor`

- **类型**：`string`
- **默认值**：`#9EC9D7`

设置浅色主题下提示背景基色（十六进制）。

## `i18n-mage.translationHints.light.backgroundAlpha`

- **类型**：`number`
- **默认值**：`0.4`

设置浅色主题下提示背景透明度（0-1）。

## `i18n-mage.translationHints.dark.fontColor`

- **类型**：`string`
- **默认值**：`#4EC9B0`

设置深色主题下提示文字颜色（十六进制）。

## `i18n-mage.translationHints.dark.backgroundColor`

- **类型**：`string`
- **默认值**：`#264F48`

设置深色主题下提示背景基色（十六进制）。

## `i18n-mage.translationHints.dark.backgroundAlpha`

- **类型**：`number`
- **默认值**：`0.6`

设置深色主题下提示背景透明度（0-1）。