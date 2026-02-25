# Common Issues

## How should I choose translation providers?

For most teams outside Mainland China, start with:

- DeepL
- OpenAI / ChatGPT
- Google

Then add regional providers only if needed for coverage, pricing, or network availability.

Recommended order is controlled by `i18n-mage.translationServices.translateApiPriority`.

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
