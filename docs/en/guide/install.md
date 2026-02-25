# Installation Guide

## Prerequisites

Before installing, make sure:

- VS Code version is **>= 1.89.0**
- Your project has an accessible language file directory (for example `locales/` or `i18n/`)

## Installation Methods

### Method 1: Install from Extension Marketplace

#### VS Code Marketplace

1. Open VS Code.
2. Open Extensions panel (`Ctrl+Shift+X` / `Cmd+Shift+X`).
3. Search for `i18n Mage`.
4. Click **Install**.
   Or open [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=jensen-wen.i18n-mage).

#### OpenVSX (for VSCodium, Cursor, etc.)

1. Open Extensions panel in your editor.
2. Search for `i18n Mage`.
3. Click **Install**.
   Or open [OpenVSX](https://open-vsx.org/extension/jensen-wen/i18n-mage).

### Method 2: Install via CLI

#### Install from VS Code Marketplace

```bash
code --install-extension jensen-wen.i18n-mage
```

#### Install from OpenVSX Registry

```bash
code --install-extension jensen-wen.i18n-mage --registry https://open-vsx.org
```

## Platform Compatibility and Updates

| Platform | Editors | Update Frequency | Auto Update |
| --- | --- | --- | --- |
| **VS Code Marketplace** | Visual Studio Code, VS Code Insiders | Real-time sync | Yes |
| **OpenVSX Registry** | VSCodium, Cursor, and other OSS editors | Synced with Marketplace | Depends on editor |

## Verify Installation

After installation, you should see:

1. **Activity Bar Icon**: wizard-hat icon appears.
2. **Command Palette**: `Ctrl+Shift+P` can find i18n Mage commands.
3. **Sidebar View**: `i18n Mage / Grimoire` panel is available.

### Quick Verification Commands

Open Command Palette (`Ctrl+Shift+P`) and run:

- `i18n Mage: Check Usage`
- `i18n Mage: Search`
- `i18n Mage: Fix`

## Troubleshooting

If installation fails or features do not work as expected:

1. Restart your editor.
2. Confirm VS Code version is `>= 1.89.0`.
3. Check language path config (`i18n-mage.workspace.languagePath`).
4. Open Output panel and switch to `i18n Mage`.
5. Temporarily enable `i18n-mage.general.enableDebugLog` and retry.
6. [Open an issue on GitHub](https://github.com/baimohui/i18n-mage/issues).

## Official Links

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=jensen-wen.i18n-mage)
- [OpenVSX Registry](https://open-vsx.org/extension/jensen-wen/i18n-mage)
