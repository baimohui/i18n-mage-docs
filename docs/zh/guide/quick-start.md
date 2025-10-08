# 🚀️ 快速上手

安装 i18n Mage 后，按照以下步骤开始使用：

## 一、打开 i18n Mage 面板

启用插件后，VS Code 侧边栏会新增一个“国际化巫师”图标。点击后打开的面板会显示当前项目中的翻译词条信息，包括：

- 当前打开文件中的词条情况
- 各语言文件的同步情况（总词条数、缺失数等）
- 词条使用情况（已使用、未使用、未定义）
- 翻译词条的树状结构
- 功能按钮（刷新、导出、导入、排序、修复等）

![打开面板](./images/panel-view.png)

如果 i18n Mage 没有自动检测到你的语言文件：

1. 在面板中点击"设置语言目录"
2. 选择包含语言文件的文件夹（例如：`locales/`, `i18n/`, `lang/`）

## 二、配置语言

- 在翻译面板中，“同步情况”区域会显示所有有效的语言文件名称。
- 可右键将某语言设置为“显示语言”或“翻译源语言”。
- 若插件无法识别文件语言，可手动标记语言类型。

![设置语言](./images/set-language.png)

## 三、配置翻译服务（推荐）

配置至少一个翻译服务以启用自动翻译：

1. 进入 `设置 > 扩展 > i18n Mage > 翻译服务`
2. 选择你偏好的服务：
   - **谷歌翻译**：无需配置，但可能需要代理
   - **DeepL**：需要 [API 密钥](https://www.deepl.com/pro#developer)
   - **百度翻译**：需要 [APP ID 和密钥](https://fanyi-api.baidu.com/)
   - **腾讯翻译**：需要 [SecretId 和 SecretKey](https://console.cloud.tencent.com/cam)
   - **DeepSeek**：需要 [API Key](https://platform.deepseek.com/)
