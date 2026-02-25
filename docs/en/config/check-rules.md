# Check Rules Configuration

## `i18n-mage.analysis.fileExtensions`

- **Type**: `array`
- **Default**: `[ ".js", ".ts", ".jsx", ".tsx", ".vue", ".html" ]`

File extensions scanned for entry usage checks.

## `i18n-mage.analysis.onSave`

- **Type**: `boolean`
- **Default**: `true`

Run global entry checks on every save.

## `i18n-mage.analysis.scanStringLiterals`

- **Type**: `boolean`
- **Default**: `true`

Scan string literals as potential keys when analyzing usage.

## `i18n-mage.analysis.ignoreCommentedCode`

- **Type**: `boolean`
- **Default**: `false`

Ignore commented code during usage analysis.

## `i18n-mage.analysis.syncBasedOnReferredEntries`

- **Type**: `boolean`
- **Default**: `false`

Use reference-language entries as the sync baseline when enabled.

## `i18n-mage.analysis.fileSizeSkipThresholdKB`

- **Type**: `number`
- **Default**: `100`

Skip analysis for files larger than this threshold (KB).
