# Write Rules Configuration

## `i18n-mage.writeRules.sortRule`

- **Type**: `enum`
- **Default**: `none`

Sort rule when writing language files (flat structure only):

- `none`
- `byKey`
- `byPosition`

## `i18n-mage.writeRules.sortAfterFix`

- **Type**: `boolean`
- **Default**: `false`

Whether to sort entries after fix operations.

## `i18n-mage.writeRules.languageStructure`

- **Type**: `enum`
- **Default**: `auto`

- `auto`
- `nested`
- `flat`

## `i18n-mage.writeRules.allowDotInNestedKey`

- **Type**: `boolean`
- **Default**: `true`

When `languageStructure = nested`, whether `.` is allowed in keys.

## `i18n-mage.writeRules.keyPrefix`

- **Type**: `enum`
- **Default**: `manual-selection`

- `none`
- `manual-selection`
- `auto-path`
- `auto-popular`

## `i18n-mage.writeRules.keyStrategy`

- **Type**: `enum`
- **Default**: `english`

- `english`
- `pinyin`

## `i18n-mage.writeRules.keyStyle`

- **Type**: `enum`
- **Default**: `camelCase`

- `camelCase`
- `snake_case`
- `PascalCase`
- `kebab-case`
- `raw`

## `i18n-mage.writeRules.indentType`

- **Type**: `enum`
- **Default**: `auto`

- `auto`
- `space`
- `tab`

## `i18n-mage.writeRules.indentSize`

- **Type**: `number`
- **Default**: `null`

Indent width.

## `i18n-mage.writeRules.maxKeyLength`

- **Type**: `number`
- **Default**: `40`

Maximum generated key length.

## `i18n-mage.writeRules.invalidKeyStrategy`

- **Type**: `enum`
- **Default**: `ai`

Fallback strategy for invalid generated keys:

- `fallback`
- `ai`

## `i18n-mage.writeRules.quoteStyleForKey`

- **Type**: `enum`
- **Default**: `auto`

- `auto`
- `single`
- `double`
- `none`

## `i18n-mage.writeRules.quoteStyleForValue`

- **Type**: `enum`
- **Default**: `auto`

- `auto`
- `single`
- `double`

## `i18n-mage.writeRules.stopWords`

- **Type**: `array`
- **Default**: `["the"]`

Stop-word list used in key generation.

## `i18n-mage.writeRules.stopPrefixes`

- **Type**: `array`
- **Default**: `[]`

Path prefix filters for `auto-path` key prefix generation.

## Deprecated

### `i18n-mage.writeRules.enableKeyTagRule`
### `i18n-mage.writeRules.enablePrefixTagRule`

Deprecated and planned for removal.
