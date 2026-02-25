# Fill Missing Translations

## What It Does

When a key has a value in the reference language but is missing or empty in other locales, i18n Mage can fill translations in batch.

![Fill Missing Translations](../../en/guide/images/fill-missing-translations.gif)

## How to Use

### Entry Points

- Global fix:
  - Sidebar -> `Fix`
  - Command Palette -> `i18n Mage: Fix`
  - Shortcut: `Ctrl+Alt+F` / `Cmd+Alt+F`
- Scoped fill:
  - Run fill action on selected groups or keys in tree view

### Execution Flow

1. Scan missing keys (and optional empty values).
2. Use `referenceLanguage` text as source.
3. Translate by `translateApiPriority`.
4. Build write changes.
5. Preview (if enabled) and apply.

## Related Settings

- `i18n-mage.translationServices.referenceLanguage`
- `i18n-mage.translationServices.translateApiPriority`
- `i18n-mage.translationServices.autoTranslateEmptyKey`
- `i18n-mage.translationServices.validateLanguageBeforeTranslate`
- `i18n-mage.translationServices.unmatchedLanguageAction`
- `i18n-mage.translationServices.proxy.*`
- `i18n-mage.translationServices.aiCustomPrompt`
- `i18n-mage.general.previewChanges`

Provider note:

- For most international teams, start with DeepL / OpenAI / Google in `translateApiPriority`.
- Add regional providers only when required by coverage, pricing, or network constraints.

## FAQ

- Some keys were not filled: source value may be missing, or selected scope excluded them.
- Translation failed: usually API key/quota/network/provider issues.
- No preview shown: check `i18n-mage.general.previewChanges`.

