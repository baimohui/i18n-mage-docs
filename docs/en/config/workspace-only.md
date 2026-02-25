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

## `i18n-mage.workspace.ignoredFiles`
- Type: `string[]`
- Default: `[]`
- Description: files excluded from scanning.

## `i18n-mage.workspace.ignoredDirectories`
- Type: `string[]`
- Default: `[]`
- Description: directories excluded from scanning.

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
