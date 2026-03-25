# Workspace-Only Configuration

The settings below are workspace-only (`scope: resource`) and should not be written to user-level settings.

## `i18n-mage.workspace.projectPath`
- Type: `string`
- Default: `""`
- Description: project root path.

## `i18n-mage.workspace.languagePath`
- Type: `string`
- Default: `""`
- Description: language files directory path.

## `i18n-mage.workspace.manuallyMarkedUsedEntries`
- Type: `string[]`
- Default: `[]`
- Description: entries manually marked as used.

## `i18n-mage.workspace.ignoredPaths`
- Type: `string[]`
- Default value: `[]`
- Description: List of paths to ignore during scanning, supports both file and directory paths.

## `i18n-mage.workspace.ignoredLanguages`
- Type: `string[]`
- Default: `[]`
- Description: language files excluded from processing.

## `i18n-mage.workspace.ignoredUndefinedEntries`
- Type: `string[]`
- Default: `[]`
- Description: undefined entries ignored in checks/fixes.

## `i18n-mage.workspace.extractScopeWhitelist`
- Type: `string[]`
- Default: `[]`
- Description: extraction whitelist for files/directories.

## `i18n-mage.workspace.extractScopeBlacklist`
- Type: `string[]`
- Default: `[]`
- Description: extraction blacklist for files/directories.
