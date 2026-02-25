# Excel Sync

## What It Does

Excel sync supports round-trip collaboration between locale files and spreadsheet workflows.

![Excel](../../en/guide/images/excel.png)

## How to Use

### Entry Point

- Sidebar (`Grimoire`) -> `Excel` -> choose operation

### Supported Operations

- `Export Excel` (full)
- `Import Excel` (full)
- `Export Version Diff` (incremental)
- `Import Version Diff` (incremental)

### Recommended Team Flow

1. Export version diff from a baseline commit.
2. Translators update `ADD` and `MODIFY` sheets.
3. Import version diff.
4. Preview and apply changes.

## Related Settings

- `i18n-mage.general.sortOnExport`
- `i18n-mage.general.previewChanges`
- `i18n-mage.workspace.projectPath`
- `i18n-mage.workspace.languagePath`

## FAQ

- Cannot export version diff: language folder may be outside project path, or Git history is unavailable.
- Some rows were skipped: corresponding keys may not exist in current project.

