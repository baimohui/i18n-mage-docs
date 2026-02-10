# 翻译服务配置

## `i18n-mage.translationServices.autoTranslateMissingKey`

- **类型**：`boolean`
- **默认值**：`false`

当全局修复时检测到未定义的词条 Key（如 t('未定义')），插件会视其为文案进行提取生成新词条 Key（如 'undefined'），将新 Key 写入语言文件，并自动替换源文件中的 Key。

## `i18n-mage.translationServices.matchExistingKey`

- **类型**：`boolean`
- **默认值**：`true`

启用未定义词条自动匹配功能：当修复时检测到未定义的翻译文本（如 `t('未定义')`），插件会在参考语言文件中查找相同文本的现有词条，若找到匹配项，则自动用该词条的 Key（如 'undefined'）替换源文件。匹配成功时将不会触发自动翻译。

## `i18n-mage.translationServices.validateLanguageBeforeTranslate`

- **类型**：`boolean`
- **默认值**：`true`

启用翻译前语言校验功能：在进行翻译前，插件会使用简单的字符范围判断方法确认待翻译文本是否属于翻译源语言，只有校验通过后才会执行自动翻译。

## `i18n-mage.translationServices.unmatchedLanguageAction`

- **类型**：`string`
- **默认值**：`query`

设置翻译前语言校验失败时的处理方式，支持以下选项：

- `ignore`：忽略，不进行翻译
- `force`：继续以源语言进行翻译，即使文本不属于源语言
- `fill`：不进行翻译，直接用原文填充所有语言
- `switch`：手动切换到其他源语言，再进行翻译
- `query`：每次都弹出选择框，让用户从上述选项中手动选择

## `i18n-mage.translationServices.keyGenerationFillScope`

- **类型**：`enum`
- **默认值**：`all`

生成新键时填充翻译的语言范围，支持以下选项：

- `minimal`：最小范围 - 拼音键名时仅当前语言，英文键名时包括英文翻译
- `all`：为所有支持的语言调用翻译服务填充

## `i18n-mage.translationServices.ignorePossibleVariables`

- **类型**：`boolean`
- **默认值**：`true`

当未定义词条键名疑似为变量时，忽略其提取，不生成新词条，以避免误翻译。

## `i18n-mage.translationServices.autoTranslateEmptyKey`

- **类型**：`boolean`
- **默认值**：`true`

修复时是否要翻译空值词条。

## `i18n-mage.translationServices.referenceLanguage`

- **类型**：`string`
- **默认值**：VsCode 默认语言

设置翻译服务使用的参考语言，支持使用各翻译平台的语言代码或插件可识别的语言名称。

## `i18n-mage.translationServices.langAliasCustomMappings`

- **类型**：`object`
- **默认值**：`{}`

自定义语言别名映射配置（格式：{ '语言代码': ['别名 1', '别名 2'] }），用于解决插件语言识别问题，其中：

- 语言代码：必须使用 Google 翻译的标准国家/地区码（如 'zh-CN'）
- 别名：支持设置多个替代名称（如 ['简体中文', '中文简体']）

## `i18n-mage.translationServices.translateApiPriority`

- **类型**：`array`
- **默认值**：`[ "deepl", "chatgpt", "deepseek", "baidu", "tencent", "youdao", "google" ]`

设置使用的翻译服务及优先级。如果调用某个翻译平台时出现异常，插件会自动切换到下一个可用的翻译平台。

## `i18n-mage.translationServices.deeplVersion`

- **类型**：`string`
- **默认值**：`""`

设置 DeepL 翻译 API 版本。

## `i18n-mage.translationServices.deeplApiKey`

- **类型**：`string`
- **默认值**：`""`

设置 DeepL 翻译 API 密钥。

## `i18n-mage.translationServices.googleApiKey`

- **类型**：`string`
- **默认值**：`""`

设置 Google 翻译 API 密钥。

## `i18n-mage.translationServices.chatgptApiKey`

- **类型**：`string`
- **默认值**：`""`

设置 ChatGPT API 密钥。

## `i18n-mage.translationServices.deepseekApiKey`

- **类型**：`string`
- **默认值**：`""`

设置 DeepSeek 翻译 API 密钥。

## `i18n-mage.translationServices.aiCustomPrompt`

- **类型**：`string`
- **默认值**：`""`

设置自定义 AI 翻译提示词。

## `i18n-mage.translationServices.baiduAppId`

- **类型**：`string`
- **默认值**：`""`

设置百度翻译开放平台开发者 APP ID。

## `i18n-mage.translationServices.baiduSecretKey`

- **类型**：`string`
- **默认值**：`""`

设置百度翻译开放平台开发者密钥。

## `i18n-mage.translationServices.tencentSecretId`

- **类型**：`string`
- **默认值**：`""`

设置腾讯云平台账号 SecretId。

## `i18n-mage.translationServices.tencentSecretKey`

- **类型**：`string`
- **默认值**：`""`

设置腾讯云平台账号 SecretKey。

## `i18n-mage.translationServices.youdaoAppId`

- **类型**：`string`
- **默认值**：`""`

设置有道翻译开放平台开发者 APP ID。

## `i18n-mage.translationServices.youdaoAppKey`

- **类型**：`string`
- **默认值**：`""`

设置有道翻译开放平台 APP 密钥。

