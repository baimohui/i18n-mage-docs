# Extract Hardcoded Texts Configuration

This page documents settings directly related to "Extract Hardcoded Texts".

## Scan Scope

### `i18n-mage.extract.fileExtensions`
- Type: `string[]`
- Default: `[".js", ".ts", ".jsx", ".tsx", ".mjs", ".cjs", ".vue"]`
- Description: file extensions scanned for extraction.

### `i18n-mage.workspace.extractScopeWhitelist`
- Type: `string[]`
- Default: `[]`
- Description: extraction whitelist (files/directories).

### `i18n-mage.workspace.extractScopeBlacklist`
- Type: `string[]`
- Default: `[]`
- Description: extraction blacklist (files/directories).

## Generated Call Code

### `i18n-mage.extract.jsTsFunctionName`
- Type: `string`
- Default: `"t"`
- Description: i18n function name in JS/TS files.

### `i18n-mage.extract.vueTemplateFunctionName`
- Type: `string`
- Default: `"t"`
- Description: i18n function name in Vue templates.

### `i18n-mage.extract.vueScriptFunctionName`
- Type: `string`
- Default: `"t"`
- Description: i18n function name in Vue scripts.

### `i18n-mage.extract.jsTsImportLines`
- Type: `string[]`
- Default: `[]`
- Description: import lines inserted into JS/TS files.

### `i18n-mage.extract.jsTsSetupLines`
- Type: `string[]`
- Default: `[]`
- Description: setup lines inserted into JS/TS files.

### `i18n-mage.extract.vueScriptImportLines`
- Type: `string[]`
- Default: `[]`
- Description: import lines inserted into Vue scripts.

### `i18n-mage.extract.vueScriptSetupLines`
- Type: `string[]`
- Default: `[]`
- Description: setup lines inserted into Vue scripts.

## Extraction Filters

### `i18n-mage.extract.onlyExtractSourceLanguageText`
- Type: `boolean`
- Default: `true`
- Description: only extract text matching source-language characteristics.

### `i18n-mage.extract.vueTemplateIncludeAttrs`
- Type: `string[]`
- Default: `[]`
- Description: Vue template attribute whitelist.

### `i18n-mage.extract.vueTemplateExcludeAttrs`
- Type: `string[]`
- Default: `["key", "ref", "prop", "value", "class", "style", "id", "for", "type", "name", "src", "href", "to"]`
- Description: Vue template attribute blacklist.

## Related Settings

- `i18n-mage.i18nFeatures.framework`
- `i18n-mage.writeRules.*`
- `i18n-mage.translationServices.referenceLanguage`
