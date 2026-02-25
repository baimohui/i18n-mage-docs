# Quick Start

This guide is for first-time users. The goal is to complete a workable setup and run the core workflow in minutes.

## 1. Open the Panel and Check Project Status

After installing, open the i18n Mage icon in the VS Code sidebar, then open the `Grimoire` panel. You can see:

- Sync information (language status, missing/empty stats)
- Usage information (used/unused/undefined)
- Entry tree and top actions (search, Excel, sort, fix)

![Open Panel](../../en/guide/images/panel-view.png)

## 2. Configure Language Directory and Project Directory

If language files are not detected automatically, configure:

- `i18n-mage.workspace.languagePath`: language file directory
- `i18n-mage.workspace.projectPath`: project root directory

Common language directories: `locales/`, `i18n/`, `lang/`.

## 3. Set Reference Language and Display Language

In the "Sync" section:

- Right-click a language to set it as **reference language**
- Right-click a language to set it as **display language**

It is recommended to set the reference language before using fix, fill, and rewrite operations.

![Set Language](../../en/guide/images/set-language.png)

## 4. Configure Translation Services (At Least One)

Go to `Extensions -> i18n Mage -> Translation Services` and configure your API keys.

Common settings:

- `i18n-mage.translationServices.translateApiPriority`
- `i18n-mage.translationServices.deeplApiKey`
- `i18n-mage.translationServices.googleApiKey`
- `i18n-mage.translationServices.openaiApiKey`

Optional regional providers:

- `i18n-mage.translationServices.deepseekApiKey`
- `i18n-mage.translationServices.baiduAppId` / `baiduSecretKey`
- `i18n-mage.translationServices.tencentSecretId` / `tencentSecretKey`
- `i18n-mage.translationServices.youdaoAppId` / `youdaoAppKey`

If you are behind a corporate proxy or restricted network:

- `i18n-mage.translationServices.proxy.enable`
- `i18n-mage.translationServices.proxy.host`
- `i18n-mage.translationServices.proxy.port`
- `i18n-mage.translationServices.proxy.protocol`

## 5. Run a Minimal Workflow

Recommended order:

1. `Extract Hardcoded Texts` (`Ctrl+Alt+E` / `Cmd+Alt+E`, optional)
2. `Check Usage` (`Ctrl+Alt+C` / `Cmd+Alt+C`)
3. `Fix` (`Ctrl+Alt+F` / `Cmd+Alt+F`)
4. `Search` (`Ctrl+Alt+S` / `Cmd+Alt+S`)
5. (Optional) `Sort`

## 6. Excel Collaboration Workflow

In the sidebar, click `Excel` to access four actions:

- `Export Excel`: export all entries
- `Import Excel`: import all entries
- `Export Version Diff`: export incremental diff by git baseline
- `Import Version Diff`: write diff sheet back to project

Recommended process:

1. Developer exports version diff (choose baseline commit)
2. Translator updates texts in `ADD / MODIFY` sheets
3. Developer imports version diff and confirms preview
4. Run `Check Usage` again to verify results

## 7. Shortcut Reference

| Feature | Win/Linux | macOS |
| --- | --- | --- |
| Check usage | `Ctrl+Alt+C` | `Cmd+Alt+C` |
| Extract hardcoded texts | `Ctrl+Alt+E` | `Cmd+Alt+E` |
| One-click fix | `Ctrl+Alt+F` | `Cmd+Alt+F` |
| Search entries | `Ctrl+Alt+S` | `Cmd+Alt+S` |
| Toggle translation hints | `Ctrl+Alt+D` | `Cmd+Alt+D` |
| Browse translations in current file | `Ctrl+Alt+T` | `Cmd+Alt+T` |

