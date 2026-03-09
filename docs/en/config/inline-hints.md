# Inline Hints Configuration

## `i18n-mage.translationHints.enable`

- **Type**: `boolean`
- **Default**: `true`

Enable translation inline hints.

## `i18n-mage.translationHints.displayMode`

- **Type**: `enum`
- **Default**: `overlay`

- `overlay`: overlay translation on original text
- `inline`: show translation beside original text

## `i18n-mage.translationHints.fullFileMaxSizeKB`

- **Type**: `number`
- **Default**: `50`

Intelligently switch decoration scope based on file size (in KB). Files ≤ the set value use full-file decoration, otherwise only the visible range is decorated. 0 means always visible range only, -1 means always full file.

## `i18n-mage.translationHints.realtimeVisibleRangeUpdate`

- **Type**: `boolean`
- **Default**: `false`

When scope is `visible`, refresh decorations during scrolling.

## `i18n-mage.translationHints.applyToStringLiterals`

- **Type**: `boolean`
- **Default**: `false`

Also apply inline hints to plain string literals.

## `i18n-mage.translationHints.enableLooseKeyMatch`

- **Type**: `boolean`
- **Default**: `true`

Enable fuzzy decoration for dynamically assembled keys.

## `i18n-mage.translationHints.maxLength`

- **Type**: `number`
- **Default**: `40`

Max displayed inline hint length.

## `i18n-mage.translationHints.italic`

- **Type**: `boolean`
- **Default**: `false`

Render inline hints in italic.

## Light Theme

- `i18n-mage.translationHints.light.fontColor` (default: `#2E7D9A`)
- `i18n-mage.translationHints.light.backgroundColor` (default: `#9EC9D7`)
- `i18n-mage.translationHints.light.backgroundAlpha` (default: `0.4`)

## Dark Theme

- `i18n-mage.translationHints.dark.fontColor` (default: `#4EC9B0`)
- `i18n-mage.translationHints.dark.backgroundColor` (default: `#264F48`)
- `i18n-mage.translationHints.dark.backgroundAlpha` (default: `0.6`)
