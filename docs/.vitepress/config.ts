import { defineConfig } from "vitepress";

export default defineConfig({
  title: "i18n Mage",
  description: "Your multilingual assistant for VS Code projects.",
  base: "/i18n-mage-docs/", // ← 如果部署在子路径

  locales: {
    // --- 英文站 ---
    // root: {
    //   label: 'English',
    //   lang: 'en-US',
    //   link: '/en/',
    //   themeConfig: {
    //     nav: [
    //       { text: 'Guide', link: '/en/guide/install' },
    //       // { text: 'Configuration', link: '/en/config/overview' },
    //     ],
    //     sidebar: {
    //       '/en/guide/': [
    //         {
    //           text: 'Guide',
    //           items: [
    //             { text: 'Installation', link: '/en/guide/install' },
    //             // { text: 'Usage', link: '/en/guide/usage' },
    //           ],
    //         },
    //       ],
    //       // '/en/config/': [
    //       //   {
    //       //     text: 'Configuration',
    //       //     items: [
    //       //       { text: 'Overview', link: '/en/config/overview' },
    //       //       { text: 'Advanced', link: '/en/config/advanced' },
    //       //     ],
    //       //   },
    //       // ],
    //     },
    //   },
    // },

    // --- 中文站 ---
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh/guide/introduction",
      themeConfig: {
        nav: [
          { text: "指南", link: "/zh/guide/introduction" },
          { text: "配置", link: "/zh/config/general" },
        ],
        sidebar: {
          zh: [
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
              items: [
                {
                  text: "补充缺失翻译",
                  link: "/zh/features/fill-missing-translations",
                },
                {
                  text: "修复未定义词条",
                  link: "/zh/features/fix-undefined-entries",
                },
              ],
            },
            {
              text: "配置",
              items: [
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
                { text: "工作区配置", link: "/zh/config/workspace-only" },
              ],
            },
            { text: "常见问题", link: "/zh/common-issues" },
            { text: "更新日志", link: "/zh/changelog" },
          ],
        },
        outlineTitle: "页面导航",
        docFooter: { prev: "上一页", next: "下一页" },
        // editLink: {
        //   pattern:
        //     "https://github.com/baimohui/i18n-mage-docs/edit/main/docs/:path",
        //   text: "在 GitHub 上编辑此页",
        // },
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
