# Common Issues

## How should I choose translation providers?

The plugin currently supports Google, DeepL, ChatGPT, Baidu, Tencent, Youdao, DeepSeek, Doubao, Qwen, Hunyuan, and Kimi translation services.

1. **Google Translate**: High translation quality, supports multiple languages. The plugin also provides free Google Translate calls without account configuration, but requires scientific internet access (due to Google Translate API rate limits, multiple calls in a short time may result in the IP address being restricted).

2. **DeepL**: Known for accuracy and fluency, supports 30+ languages. You can register and get an API key from the [DeepL API Pro](https://www.deepl.com/pro-api). The free version includes 500,000 characters per month.

3. **Baidu Translate**: Good translation quality. You need to register at [Baidu Translate Open Platform](https://fanyi-api.baidu.com/choose) and complete personal authentication to use the standard version, which includes 1 million free characters per month and supports 28 languages.

4. **Tencent Translate**: Good translation quality. You need to register at [Tencent Cloud Console](https://console.cloud.tencent.com/cam). Tencent Translate offers 5 million free characters per month and supports 17 languages.

5. **DeepSeek**: High AI translation quality, supports multiple languages. You need to register at [DeepSeek Official Website](https://platform.deepseek.com) and top up (approximately 0.5-2 RMB per million input tokens).

6. **ChatGPT**: Supports multiple languages, natural and fluent translation effects. You need to register at [OpenAI Platform](https://platform.openai.com) and get an API Key. Charged per usage, suitable for scenarios requiring custom translation logic.

7. **Youdao Translate**: Supports 110+ languages, offers free trial and paid plans. You need to register at [Youdao Translate Open Platform](https://fanyi.youdao.com/openapi) to get an API key. Supports text, image, and voice translation.

8. **Doubao**: AI translation service launched by ByteDance, supports multiple languages. You need to register at [Doubao Model Open Platform](https://www.volcengine.com/docs/9980) and get an API Key. Charged per usage.

9. **Qwen**: AI translation service launched by Alibaba Cloud, supports multiple languages. You need to register at [Qwen Platform](https://dashscope.console.aliyun.com) and get an API Key. Charged per usage.

10. **Hunyuan**: AI translation service launched by Tencent, supports multiple languages. You need to register at [Hunyuan Platform](https://cloud.tencent.com/product/hunyuan) and get an API Key. Charged per usage.

11. **Kimi**: AI translation service launched by Moonshot AI, supports multiple languages. You need to register at [Kimi Open Platform](https://platform.moonshot.cn) and get an API Key. Charged per usage.

## Which i18n key patterns are supported?

The extension primarily detects keys from i18n function calls such as `t(...)`.

Supported patterns include:

- direct keys, for example `t('common.ok')`
- dynamic composition, for example `t("prefix." + key + ".suffix")`

For dynamic patterns, usage analysis may match multiple keys. Inline hints show the first matched result.

## Why were some undefined keys not fixed?

Check the following:

1. `i18n-mage.translationServices.matchExistingKey` and `i18n-mage.translationServices.autoTranslateMissingKey` are enabled as needed.
2. `i18n-mage.translationServices.referenceLanguage` is set correctly.
3. If language validation is enabled, source text matches expected language characteristics.
4. Your translation provider API key and quota are valid.

## Why are translation calls failing intermittently?

Common causes are:

- API rate limits or quota exhaustion
- temporary provider-side errors
- network or proxy routing issues

You can reorder `translateApiPriority`, retry, or switch provider.

## Why is performance slow in large repositories?

Tune analysis settings:

- configure `i18n-mage.workspace.ignoredDirectories`
- reduce scanned file types via `i18n-mage.analysis.fileExtensions`
- keep `i18n-mage.analysis.fileSizeSkipThresholdKB` at a reasonable value
- use `decorationScope = visible` for translation hints
