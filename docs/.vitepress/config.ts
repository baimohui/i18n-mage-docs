import { defineConfig } from "vitepress";

export default defineConfig({
  title: "i18n Mage",
  description: "Your multilingual assistant for VS Code projects.",
  base: "/i18n-mage-docs/",
  head: [
    ["link", { rel: "icon", href: "/i18n-mage-docs/favicon.ico" }],
    ["script", {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?077a0a092c6598d8d41791aa4303cda8";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `]
  ],

  locales: {
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/guide/introduction",
      themeConfig: {
        nav: [
          { text: "Guide", link: "/en/guide/introduction" },
          { text: "Quick Start", link: "/en/guide/quick-start" },
          { text: "Features", link: "/en/features/" },
          { text: "Configuration", link: "/en/config/" },
          { text: "Changelog", link: "/en/changelog" },
        ],
        sidebar: {
          "/en/": [
            {
              text: "Guide",
              items: [
                { text: "Introduction", link: "/en/guide/introduction" },
                { text: "Installation", link: "/en/guide/install" },
                { text: "Quick Start", link: "/en/guide/quick-start" },
              ],
            },
            {
              text: "Features",
              collapsed: true,
              items: [
                { text: "Overview", link: "/en/features/" },
                {
                  text: "Translation Hints",
                  link: "/en/features/translation-hints",
                },
                { text: "Search Entries", link: "/en/features/search" },
                {
                  text: "Fill Missing Translations",
                  link: "/en/features/fill-missing-translations",
                },
                {
                  text: "Fix Undefined Entries",
                  link: "/en/features/fix-undefined-entries",
                },
                {
                  text: "Extract Hardcoded Texts",
                  link: "/en/features/extract-hardcoded-texts",
                },
                { text: "Excel Sync", link: "/en/features/excel" },
                { text: "Completion", link: "/en/features/completion" },
                { text: "Write Sorting", link: "/en/features/write-sorting" },
                { text: "Check Usage", link: "/en/features/check-usage" },
                {
                  text: "Quick Operations",
                  link: "/en/features/quick-operations",
                },
              ],
            },
            {
              text: "Configuration",
              collapsed: true,
              items: [
                { text: "Overview", link: "/en/config/" },
                { text: "General", link: "/en/config/general" },
                { text: "i18n Features", link: "/en/config/i18n-features" },
                {
                  text: "Translation Services",
                  link: "/en/config/translation-services",
                },
                { text: "Check Rules", link: "/en/config/check-rules" },
                { text: "Write Rules", link: "/en/config/write-rules" },
                { text: "Inline Hints", link: "/en/config/inline-hints" },
                { text: "Completion", link: "/en/config/completion" },
                {
                  text: "Extract Hardcoded Texts",
                  link: "/en/config/extract-hardcoded-texts",
                },
                { text: "Workspace Only", link: "/en/config/workspace-only" },
              ],
            },
            { text: "Common Issues", link: "/en/common-issues" },
            { text: "Changelog", link: "/en/changelog" },
          ],
        },
        outlineTitle: "On this page",
        docFooter: { prev: "Previous page", next: "Next page" },
      },
    },

    zh: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh/guide/introduction",
      themeConfig: {
        nav: [
          { text: "指南", link: "/zh/guide/introduction" },
          { text: "快速上手", link: "/zh/guide/quick-start" },
          { text: "功能", link: "/zh/features/" },
          { text: "配置", link: "/zh/config/" },
          { text: "更新日志", link: "/zh/changelog" },
        ],
        sidebar: {
          "/zh/": [
            {
              text: "指南",
              items: [
                { text: "介绍", link: "/zh/guide/introduction" },
                { text: "安装", link: "/zh/guide/install" },
                { text: "快速上手", link: "/zh/guide/quick-start" },
              ],
            },
            {
              text: "功能",
              collapsed: true,
              items: [
                { text: "总览", link: "/zh/features/" },
                {
                  text: "翻译装饰",
                  link: "/zh/features/translation-hints",
                },
                { text: "词条搜索", link: "/zh/features/search" },
                {
                  text: "缺失翻译补充",
                  link: "/zh/features/fill-missing-translations",
                },
                {
                  text: "未定义词条修复",
                  link: "/zh/features/fix-undefined-entries",
                },
                {
                  text: "硬编码文案提取",
                  link: "/zh/features/extract-hardcoded-texts",
                },
                { text: "Excel 同步", link: "/zh/features/excel" },
                { text: "代码补全", link: "/zh/features/completion" },
                { text: "写入排序", link: "/zh/features/write-sorting" },
                {
                  text: "使用分析",
                  link: "/zh/features/check-usage",
                },
                {
                  text: "快捷操作",
                  link: "/zh/features/quick-operations",
                },
              ],
            },
            {
              text: "配置",
              collapsed: true,
              items: [
                { text: "总览", link: "/zh/config/" },
                { text: "通用配置", link: "/zh/config/general" },
                { text: "国际化特性", link: "/zh/config/i18n-features" },
                {
                  text: "翻译服务",
                  link: "/zh/config/translation-services",
                },
                { text: "检查规则", link: "/zh/config/check-rules" },
                { text: "写入规则", link: "/zh/config/write-rules" },
                { text: "翻译内联提示", link: "/zh/config/inline-hints" },
                { text: "自动补全", link: "/zh/config/completion" },
                {
                  text: "硬编码文案提取",
                  link: "/zh/config/extract-hardcoded-texts",
                },
                { text: "工作区配置", link: "/zh/config/workspace-only" },
              ],
            },
            { text: "常见问题", link: "/zh/common-issues" },
            { text: "更新日志", link: "/zh/changelog" },
          ],
        },
        outlineTitle: "页面导航",
        docFooter: { prev: "上一页", next: "下一页" },
      },
    },
  },

  themeConfig: {
    logo: "/logo.png",
    socialLinks: [
      { icon: "github", link: "https://github.com/baimohui/i18n-mage" },
    ],
  },
});
