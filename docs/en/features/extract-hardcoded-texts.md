# Extract Hardcoded Texts

## What It Does

Extract hardcoded texts replaces literal UI text in source code with i18n calls and writes new keys into locale files.

## How to Use

### Entry Points

- Sidebar action: `Extract Hardcoded Texts`
- Editor context menu: `Extract Hardcoded Texts`
- Command Palette: `i18n Mage: Extract Hardcoded Text`
- Shortcut: `Ctrl+Alt+E` / `Cmd+Alt+E`

### Execution Flow

1. Open extraction wizard.
2. Confirm scan scope, function names, and import/setup rules.
3. Review replacements and key writes in preview.
4. Apply changes.

## Related Settings

- `i18n-mage.extract.*`
- `i18n-mage.workspace.extractScopeWhitelist`
- `i18n-mage.workspace.extractScopeBlacklist`
- `i18n-mage.i18nFeatures.framework`
- `i18n-mage.writeRules.*`
- `i18n-mage.translationServices.referenceLanguage`
- `i18n-mage.general.previewChanges`

## FAQ

- Some texts were not extracted: extension/scope/filter rules excluded them.
- No changes were written: no applicable candidates or preview was canceled.
- Import/setup insertion was unexpected: file-type setup settings may not match project conventions.
