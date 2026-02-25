# 国际化特性配置

## `i18n-mage.i18nFeatures.framework`

- **类型**: `enum`
- **默认值**: `auto`

选择使用的国际化框架：如 `vue-i18n`、`react-i18next` 等。支持以下选项：

- `auto`: 自动检测项目使用的国际化框架
- `vue-i18n`: 使用 `vue-i18n` 框架
- `react-i18next`: 使用 `react-i18next` 框架
- `i18next`: 使用 `i18next` 框架
- `vscode-l10n`: 使用 VS Code 扩展场景的 `vscode-l10n` 形式
- `none`: 不使用框架

## `i18n-mage.i18nFeatures.translationFunctionNames`

- **类型**: `array`
- **默认值**: `['t']`

指定国际化转换函数名称列表，默认为 `t`。当框架为 `vue-i18n` 时，会强制启用 `t` 和 `tc`。

## `i18n-mage.i18nFeatures.namespaceStrategy`

- **类型**: `enum`
- **默认值**: `auto`

控制翻译键命名空间的生成策略，支持以下选项：

- **`'auto'` (自动推断)**:
  - 自动选择词条使用率不为 0 的命名空间策略

- **`'full'` (完整路径)**:
  - 使用语言文件的完整相对路径作为命名空间前缀
  - 路径分隔符（如 `/`）会被替换为点号（`.`）
  - 示例：文件 `zh/modules/components.json` 会生成前缀 `modules.components`
  - 适合复杂项目结构，确保键的唯一性

- **`'file'` (仅文件名)**:
  - 仅使用文件名（不含扩展名）作为命名空间前缀
  - 示例：文件 `zh/modules/components.json` 会生成前缀 `components`
  - 适合简单项目结构，键较短但可能不够唯一

- **`'none'` (无命名空间)**:
  - 不使用任何命名空间前缀，直接将语言文件内容合并到顶层
  - 示例：文件 `zh/modules/components.json` 中的键直接使用，不加前缀
  - 需要确保所有语言文件中的键全局唯一，否则会发生覆盖

## `i18n-mage.i18nFeatures.interpolationBrackets`

- **类型**: `enum`
- **默认值**: `auto`

设置变量插值使用的花括号风格，默认跟随所选国际化框架（如 `vue-i18n` 用单花括号，`react-i18next` 用双花括号），支持以下选项：

- `auto`: 跟随所选国际化框架默认行为
- `single`: 使用单花括号语法
- `double`: 使用双花括号语法

## `i18n-mage.i18nFeatures.namespaceSeparator`

- **类型**: `enum`
- **默认值**: `auto`

设置国际化命名空间分隔符，默认跟随所选国际化框架（如 `vue-i18n` 用`.`，`react-i18next` 用`:` ），支持以下选项：

- `auto`: 跟随所选国际化框架默认行为
- `.`: 使用 `.` 分隔符
- `:`: 使用 `:` 分隔符

## `i18n-mage.i18nFeatures.defaultNamespace`

- **类型**: `string`
- **默认值**: `translation`

指定默认命名空间，用于简化像 react-i18next 和 i18next 等框架中的 t 函数调用。若未显式指定命名空间，系统将默认使用此命名空间。请确保该命名空间已正确加载。

## `i18n-mage.i18nFeatures.accessMode`

- **类型**: `enum`
- **默认值**: `function`

指定项目中访问翻译的方式，支持以下选项：

- `function`: 通过函数调用访问翻译（如 `t('common.ok')`）
- `object`: 通过对象访问翻译（如 `messages.common.ok` 或其他对象路径）

当你的代码并不使用 `t()`，而是直接从翻译对象读取内容时，请改为 `object`，并配合下方 `translationObjectIdentifiers` 使用。

## `i18n-mage.i18nFeatures.translationObjectIdentifiers`

- **类型**: `array`
- **默认值**: `[]`

当 `accessMode = object` 时，用于声明“承载翻译数据的对象标识符”列表，例如：`["messages", "localeMap", "i18nData"]`。  
插件会基于这些对象名识别和分析词条引用，避免把普通业务对象误判为翻译对象。
