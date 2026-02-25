# Translation Services Configuration

## `i18n-mage.translationServices.autoTranslateMissingKey`

- **Type**: `boolean`
- **Default**: `false`

When fixing undefined keys, treat raw text as source text, generate a new key, write it to language files, and replace source code.

## `i18n-mage.translationServices.matchExistingKey`

- **Type**: `boolean`
- **Default**: `true`

Try matching undefined text to existing keys in reference language files before translating.

## `i18n-mage.translationServices.validateLanguageBeforeTranslate`

- **Type**: `boolean`
- **Default**: `true`

Validate whether source text looks like the reference language before translation.

## `i18n-mage.translationServices.unmatchedLanguageAction`

- **Type**: `string`
- **Default**: `query`

Action when language validation fails:

- `ignore`
- `force`
- `fill`
- `switch`
- `query`

## `i18n-mage.translationServices.keyGenerationFillScope`

- **Type**: `enum`
- **Default**: `all`

Language fill scope for newly generated keys:

- `minimal`
- `all`

## `i18n-mage.translationServices.ignorePossibleVariables`

- **Type**: `boolean`
- **Default**: `true`

Ignore possible variables when extracting undefined entries.

## `i18n-mage.translationServices.autoTranslateEmptyKey`

- **Type**: `boolean`
- **Default**: `true`

Whether to translate empty values during fix operations.

## `i18n-mage.translationServices.referenceLanguage`

- **Type**: `string`
- **Default**: VS Code default language

Reference language used by translation services.

## `i18n-mage.translationServices.langAliasCustomMappings`

- **Type**: `object`
- **Default**: `{}`

Custom language alias mappings.

## `i18n-mage.translationServices.translateApiPriority`

- **Type**: `array`
- **Default**: `[ "deepl", "chatgpt", "deepseek", "baidu", "tencent", "youdao", "google" ]`

Translation provider priority order.

Recommended baseline for users outside Mainland China:

- Prioritize `deepl`, `chatgpt`, and `google`
- Add regional providers only when needed by your team or network environment

## `i18n-mage.translationServices.deeplVersion`

- **Type**: `string`
- **Default**: `free`

DeepL API version (`free` or `pro`).

## API Keys

Global providers:

- `i18n-mage.translationServices.deeplApiKey`
- `i18n-mage.translationServices.googleApiKey`
- `i18n-mage.translationServices.openaiApiKey`

Optional regional providers:

- `i18n-mage.translationServices.deepseekApiKey`
- `i18n-mage.translationServices.baiduAppId`
- `i18n-mage.translationServices.baiduSecretKey`
- `i18n-mage.translationServices.tencentSecretId`
- `i18n-mage.translationServices.tencentSecretKey`
- `i18n-mage.translationServices.youdaoAppId`
- `i18n-mage.translationServices.youdaoAppKey`

## Proxy

Use proxy settings only when your company or environment requires outbound proxy routing.

### `i18n-mage.translationServices.proxy.enable`
- **Type**: `boolean`
- **Default**: `false`

### `i18n-mage.translationServices.proxy.host`
- **Type**: `string`
- **Default**: `127.0.0.1`

### `i18n-mage.translationServices.proxy.port`
- **Type**: `number`
- **Default**: `7890`

### `i18n-mage.translationServices.proxy.protocol`
- **Type**: `enum`
- **Default**: `http`
- Options: `http`, `https`

## `i18n-mage.translationServices.aiCustomPrompt`

- **Type**: `string`
- **Default**: `""`

Custom prompt appended to AI translation context.
