# General Configuration

## `i18n-mage.general.enable`

- **Type**: `boolean`
- **Default**: `true`

Enable or disable the main i18n Mage functionality. When disabled, extension views, checks, and commands stop working.

## `i18n-mage.general.previewChanges`

- **Type**: `boolean`
- **Default**: `true`

Whether to show a preview panel before batch-changing language files (for example in fix/import operations).

## `i18n-mage.general.enableDiagnostics`

- **Type**: `boolean`
- **Default**: `true`

Enable diagnostics in editor: mark undefined entries and provide quick-fix actions.

## `i18n-mage.general.displayLanguage`

- **Type**: `string`
- **Default**: VS Code default language

Set display language for inline hints and completion text.

## `i18n-mage.general.enableDebugLog`

- **Type**: `boolean`
- **Default**: `false`

Enable debug logs in the `i18n Mage` output channel.

## `i18n-mage.general.sortOnExport`

- **Type**: `enum`
- **Default**: `byKey`

Sort rule when exporting translations to tabular formats:

- `none`: no sorting
- `byKey`: sort by key name
- `byPosition`: sort by first occurrence in source files
