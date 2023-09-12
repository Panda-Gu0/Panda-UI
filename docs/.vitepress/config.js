export default {
  title: "一个Vue3 UI组件库",
  description: "基于 Vue3 + TypeScript 实现的UI组件库",
  base: process.env.NODE_ENV === 'production' ? '/PandaUIDoc/' : '/',
  head: [
    ['link', { rel: 'icon', href: '/PandaUIDoc/logo.png' }], // 替换为你的图标文件路径
  ],
  themeConfig: {
    logo: '/logo.png',
    siteTitle: "PandaUI",
    nav: [
      { text: "指南", link: "/guild/installation/" },
      { text: "组件", link: "/components/button/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Panda-Gu0/PandaUI" },
    ],
    sidebar: {
      "/guild/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guild/installation/",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart/",
            },
          ],
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Button 按钮",
              link: "/components/button/",
            },
            {
              text: "Icon 图标",
              link: "/components/icon/",
            },
            {
              text: "Space 间距",
              link: "/components/space/"
            }
          ],
        },
        {
          text: "表单",
          items: [
            {
              text: "Input 输入框",
              link: "/components/input/",
            },
            {
              text: "Switch 开关",
              link: "/components/switch/",
            },
            {
              text: "Radio 单选框",
              link: "/components/radio/",
            },
            {
              text: "Select 选择器",
              link: "/components/select/",
            },
          ],
        },
        {
          text: "其他",
          items: [
            {
              text: "WaterMark 水印",
              link: "/components/watermark/",
            }
          ],
        },
      ],
    },
  },
};
