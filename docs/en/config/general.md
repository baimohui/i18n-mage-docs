# General Configuration

## `i18n-mage.general.enable`

- **Type**: `boolean`
- **Default**: `true`

Enable or disable the main i18n Mage functionality. When disabled, extension views, checks, and commands stop working.

## `i18n-mage.general.previewChangeScopes`

- **Type**: `array`
- **Default value**: `["fix", "rewrite", "retranslate", "excel-import", "paste-entries", "hardcoded-extract"]`

Whether to display the preview panel before applying changes for the corresponding change scopes. It is recommended to keep this enabled to avoid accidentally modifying a large number of entries.

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
