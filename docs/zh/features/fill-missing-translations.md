# 🚧 缺失翻译补全

在多语言项目中，维护翻译文件最常见的问题之一就是 **某些语言缺少对应的词条**。
i18n Mage 提供了强大的「缺失翻译补全」功能，帮助你 **自动识别并一键补全缺失内容**，同时支持人工审核和灵活控制。


## ✨ 功能概览

* 🔍 **自动检测缺失翻译**：扫描所有语言文件，智能识别缺失的词条。
* 🌍 **多翻译源支持**：内置 DeepL、Google、百度、腾讯、DeepSeek 等翻译服务。
* 🧩 **灵活的补全范围**：

  * 可选择 **特定语言** 进行补全；
  * 仅补全部分 **词条**；
  * 或直接 **一次性补全所有缺失内容**。
* 🪄 **可视化预览与修改**：在操作前预览翻译结果，并可手动调整。
* ⚙️ **智能过滤与校验**：支持在翻译前对源语言进行检测，自动跳过变量、非源语言内容等无效项。

## 👜 先决条件

### 1. 基础配置

在使用补充缺失翻译功能前，需要完成以下配置：

**设置翻译源语言**
- 在侧边栏的"同步信息"面板中，右键点击某个语言项，选择"设为翻译源语言"  
- 或在设置中配置 `i18n-mage.translationServices.referenceLanguage`  

**配置翻译服务**
- 根据选择的翻译服务，配置相应的 API 密钥：
  - DeepL: `i18n-mage.translationServices.deeplApiKey`  
  - Google: `i18n-mage.translationServices.googleApiKey`  
  - ChatGPT: `i18n-mage.translationServices.chatgptApiKey`  
  - DeepSeek: `i18n-mage.translationServices.deepseekApiKey`  
  - 百度翻译：`i18n-mage.translationServices.baiduAppId` 和 `baiduSecretKey`  
  - 腾讯翻译：`i18n-mage.translationServices.tencentSecretId` 和 `tencentSecretKey`  

**设置翻译服务优先级**
- 配置 `i18n-mage.translationServices.translateApiPriority` 来指定使用的翻译服务及其优先级  
- 如果某个翻译服务调用失败，插件会自动切换到下一个可用的服务  

### 2. 可选配置

**自动翻译空值词条**
- 启用 `i18n-mage.translationServices.autoTranslateEmptyKey` 可以在修复时同时翻译空值词条  

**语言验证**
- 启用 `i18n-mage.translationServices.validateLanguageBeforeTranslate` 可以在翻译前验证文本是否属于源语言  
- 配置 `i18n-mage.translationServices.unmatchedLanguageAction` 来设置验证失败时的处理方式：
  - `ignore`: 忽略该文本，不进行翻译  
  - `force`: 继续以源语言进行翻译  
  - `fill`: 不翻译，直接用原文填充所有语言  
  - `switch`: 手动切换到其他源语言  
  - `query`: 每次弹出选择框让用户手动选择 


## 🚀 使用步骤

### 方式一：全局补充缺失翻译

1. **触发修复命令**
   - 点击侧边栏顶部的"修复"按钮  
   - 或使用快捷键 `Ctrl+Alt+F` (Windows/Linux) / `Cmd+Alt+F` (Mac)  
   - 或在命令面板中执行 `i18n Mage: Fix`  

2. **处理非源语言文本**(如果启用了语言验证)
   - 如果源语言文件中存在非源语言的文本，插件会根据 `unmatchedLanguageAction` 配置进行处理  
   - 如果设置为 `query`,会弹出选择框让你选择处理方式  

3. **翻译执行**
   - 插件会调用配置的翻译服务，为每个缺失的语言生成翻译  
   - 翻译过程中会显示进度条，包含当前翻译的语言和新增的翻译数量  

4. **预览和确认**(如果启用了预览)
   - 如果启用了 `i18n-mage.general.previewChanges`,会显示待应用的更改  
   - 可以在预览界面中确认或调整更改后再应用 

### 方式二：针对特定范围补充翻译

1. **在同步信息面板中操作**
   - 展开"同步信息"面板，找到需要补充翻译的语言
   - 展开该语言，可以看到"缺失"和"空值"两个类别
   - 点击某个词条或类别项的修复按钮来填充缺失翻译

2. **翻译执行**
   - 插件会仅为选中的词条或语言范围生成翻译 

