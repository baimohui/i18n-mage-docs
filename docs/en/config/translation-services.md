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

Translation provider priority order. If one provider fails, the plugin will automatically switch to the next available provider.

## `i18n-mage.translationServices.customProviders`

- **Type**: `array`
- **Default**: `[]`

Custom OpenAI-compatible AI service configuration list. After configuration, enable the service using `custom:<id>` in `translateApiPriority`.

Each configuration contains:

- `id`: Service identifier (letters, numbers, `-`, `_`, `.` only), will be converted to `custom:<id>`
- `baseUrl`: Chat Completions API address (e.g., `https://xxx/v1/chat/completions`)
- `apiKey`: Service API Key
- `model`: Default model name (required if enabled in `translateApiPriority`)
- `enabled`: Whether to enable (optional, default `true`)
- `useProxy`: Whether to use plugin proxy config (optional, default `true`)
- `translateBatchConfig`: Translation batch config (optional)
- `generateBatchConfig`: Key generation batch config (optional)

Example:

```json
{
  "i18n-mage.translationServices.customProviders": [
    {
      "id": "acme",
      "baseUrl": "https://api.acme.com/v1/chat/completions",
      "apiKey": "YOUR_API_KEY",
      "model": "acme-chat",
      "enabled": true,
      "useProxy": true,
      "translateBatchConfig": {
        "maxLen": 4000,
        "batchSize": 20,
        "interval": 800
      },
      "generateBatchConfig": {
        "maxLen": 2000,
        "batchSize": 10,
        "interval": 1100
      }
    }
  ],
  "i18n-mage.translationServices.translateApiPriority": [
    "custom:acme",
    "chatgpt",
    "google"
  ]
}
```

Note:
- Duplicate `id` values will only keep the first configuration
- Configurations with `enabled: false` will be ignored
- Non-existent `custom:*` in `translateApiPriority` will be automatically ignored

## `i18n-mage.translationServices.aiCustomPrompt`

- **Type**: `string`
- **Default**: `""`

Custom prompt appended to AI translation context. Can be used to constrain tone, professional terminology, brand names, and style consistency. Write as concise rules, e.g., "Keep variable placeholders, don't translate brand names, use a product copy tone".

## `i18n-mage.translationServices.deeplVersion`

- **Type**: `string`
- **Default**: `free`

DeepL API version (`free` or `pro`).

## API Keys

Global providers:

- `i18n-mage.translationServices.deeplApiKey`
- `i18n-mage.translationServices.googleApiKey`
- `i18n-mage.translationServices.openaiApiKey`
- `i18n-mage.translationServices.openaiModel`
- `i18n-mage.translationServices.deepseekApiKey`
- `i18n-mage.translationServices.deepseekModel`
- `i18n-mage.translationServices.doubaoApiKey`
- `i18n-mage.translationServices.doubaoModel`
- `i18n-mage.translationServices.qwenApiKey`
- `i18n-mage.translationServices.qwenModel`
- `i18n-mage.translationServices.hunyuanApiKey`
- `i18n-mage.translationServices.hunyuanModel`
- `i18n-mage.translationServices.kimiApiKey`
- `i18n-mage.translationServices.kimiModel`

Optional regional providers:

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

