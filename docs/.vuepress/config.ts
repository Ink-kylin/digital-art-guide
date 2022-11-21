// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  lang: 'zh-CN',
  title: '数码艺术',
  // description: '数码艺术指南',
  theme: hopeTheme({
    hostname: "https://digital-art-guide.com",
    author: "Inkylin",
    plugins: {
      blog: false
    },
    navbar: [
      {
        text: "指南",
        link: "/prologue",
        icon: "config"
      },
      {
        text: "常见问题",
        link: "/zh/faq.md",
        icon: "question",
        // 会在 `/zh/faq` 开头的路径激活
        // 所以当你前往 `/zh/faq/xxx.html` 时也会激活
        activeMatch: "^/zh/faq",
      },
    ],

    sidebar: {
      "/digital-painting/": "structure",

    },

  }),
});

