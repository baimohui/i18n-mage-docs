# i18n Features Configuration

## `i18n-mage.i18nFeatures.framework`

- **Type**: `enum`
- **Default**: `auto`

Choose the i18n framework, such as `vue-i18n` or `react-i18next`.

- `auto`
- `vue-i18n`
- `react-i18next`
- `i18next`
- `vscode-l10n`
- `none`

## `i18n-mage.i18nFeatures.translationFunctionNames`

- **Type**: `array`
- **Default**: `['t']`

List of translation function names.

## `i18n-mage.i18nFeatures.namespaceStrategy`

- **Type**: `enum`
- **Default**: `auto`

Namespace generation strategy:

- `auto`: infer automatically
- `full`: full relative path as namespace prefix
- `file`: filename only
- `none`: no namespace

## `i18n-mage.i18nFeatures.interpolationBrackets`

- **Type**: `enum`
- **Default**: `auto`

Interpolation bracket style:

- `auto`
- `single`
- `double`

## `i18n-mage.i18nFeatures.namespaceSeparator`

- **Type**: `enum`
- **Default**: `auto`

Namespace separator:

- `auto`
- `.`
- `:`

## `i18n-mage.i18nFeatures.defaultNamespace`

- **Type**: `string`
- **Default**: `translation`

Default namespace for frameworks such as react-i18next and i18next.

## `i18n-mage.i18nFeatures.accessMode`

- **Type**: `enum`
- **Default**: `function`

How translations are accessed in code:

- `function`: e.g. `t('common.ok')`
- `object`: e.g. `messages.common.ok`

## `i18n-mage.i18nFeatures.translationObjectIdentifiers`

- **Type**: `array`
- **Default**: `[]`

Used when `accessMode = object`. Provide object identifiers that carry translations, for example `['messages', 'localeMap', 'i18nData']`.
