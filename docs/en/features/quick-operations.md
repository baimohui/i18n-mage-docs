# Quick Operations

## What It Does

Quick Operations groups lightweight, high-frequency workflows for daily i18n maintenance.

## How to Use

### Rename Key

1. Put cursor on an i18n key.
2. Press `F2`.
3. Input new key and confirm.

### Quick Navigation

- `F12`: go to key definition in locale files
- `Shift+F12`: find key references in code

### Cross-Project Migration

1. In project A: `Copy Entries`
2. In project B: `Paste Entries`
3. Resolve conflicts (overwrite or skip)

### Rewrite Entry

1. Select a key and run `Rewrite Entry`.
2. Choose source locale.
3. Input new source text.
4. Apply translated updates to other locales.

### Add New Language

1. In Sync panel, run `Add Language`.
2. Select target locale.
3. Set alias if needed.
4. Fill missing translations.

## Related Settings

- `i18n-mage.translationServices.translateApiPriority`
- `i18n-mage.translationServices.referenceLanguage`
- `i18n-mage.translationServices.langAliasCustomMappings`
- `i18n-mage.translationServices.autoTranslateEmptyKey`
- translation service API keys

## Tips

- Keep clipboard payload intact during cross-project paste.
- In multi-file locale mode, confirm write target file before applying.
