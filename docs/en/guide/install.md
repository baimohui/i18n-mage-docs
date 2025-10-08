# 📥 安装指南

## 一、前置要求

在安装前，请确保：

* VS Code 版本 ≥ **1.89.0**
* 语言文件格式为 **JSON / JSON5 / JS / TS**

---

## 二、安装方式

### ✅ 方式一：通过扩展市场安装

#### VS Code Marketplace

1. 打开 VS Code
2. 打开扩展面板（快捷键：`Ctrl+Shift+X` / `Cmd+Shift+X`）
3. 搜索 `i18n Mage`
4. 点击 **安装**
   或访问 [Visual Studio Marketplace 页面](https://marketplace.visualstudio.com/items?itemName=jensen-wen.i18n-mage)

#### OpenVSX 平台（适用于 VSCodium、Cursor 等）

1. 打开编辑器扩展面板
2. 搜索 `i18n Mage`
3. 点击 **安装**
   或访问 [OpenVSX 页面](https://open-vsx.org/extension/jensen-wen/i18n-mage)


### 💻 方式二：通过命令行安装

#### 从 VS Code Marketplace 安装

```bash
code --install-extension jensen-wen.i18n-mage
```

#### 从 OpenVSX Registry 安装

```bash
code --install-extension jensen-wen.i18n-mage --registry https://open-vsx.org
```


## 三、平台兼容与更新

| 平台                      | 适用编辑器                               | 更新频率             | 自动更新      |
| ----------------------- | ----------------------------------- | ---------------- | --------- |
| **VS Code Marketplace** | Visual Studio Code、VS Code Insiders | 实时同步             | ✅ 支持      |
| **OpenVSX Registry**    | VSCodium、Cursor 等开源编辑器              | 与 Marketplace 同步 | ⚙️ 取决于编辑器 |


## 四、验证安装是否成功

安装成功后，你应能看到以下变化：

1. **活动栏图标**：出现巫师帽 🧙‍♂️ 图标
2. **命令面板**：`Ctrl+Shift+P` 可搜索到 i18n Mage 命令
3. **状态栏**：显示 i18n Mage 语言状态指示器（如已启用）

### 快速验证命令

打开命令面板（`Ctrl+Shift+P`），输入以下命令以测试：

* `i18n Mage: refresh`：检测词条信息


## 五、安装问题排查

如果安装失败或功能异常，可尝试以下步骤：

1. **重启编辑器**
2. **检查版本**：确认 VS Code ≥ 1.89.0
3. **查看日志**：打开“输出”面板，选择“i18n Mage”
4. **反馈问题**：[在 GitHub 提交 Issue](https://github.com/jensen-wen/i18n-mage/issues)


## 🔗 官方安装链接

* [⭐ VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=jensen-wen.i18n-mage)
* [🌐 OpenVSX Registry](https://open-vsx.org/extension/jensen-wen/i18n-mage)
