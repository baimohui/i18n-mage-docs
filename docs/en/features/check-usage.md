# Check Usage

## What It Does

Check Usage scans your codebase and analyzes translation key usage:

- used keys
- unused keys
- undefined keys referenced in code

## How to Use

### Required Setup

1. Set `i18n-mage.workspace.projectPath`.
2. Set `i18n-mage.workspace.languagePath`.
3. Configure scan extensions: `i18n-mage.analysis.fileExtensions`.

### Run Analysis

- Sidebar `Refresh`
- Shortcut: `Ctrl+Alt+C` / `Cmd+Alt+C`
- Command Palette: `i18n Mage: Check Usage`

You can also enable auto-check on save.

## Related Settings

- `i18n-mage.analysis.onSave`
- `i18n-mage.analysis.scanStringLiterals`
- `i18n-mage.analysis.ignoreCommentedCode`
- `i18n-mage.analysis.syncBasedOnReferredEntries`
- `i18n-mage.analysis.fileSizeSkipThresholdKB`
- `i18n-mage.workspace.ignoredDirectories`
- `i18n-mage.workspace.ignoredFiles`

## Tips

- For large repos, keep file-size threshold and ignored directories configured.
- Dynamic patterns like `t("prefix." + key + ".suffix")` are supported but should still be reviewed manually.
