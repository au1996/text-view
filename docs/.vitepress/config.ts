export default {
  lang: 'en-US',
  title: 'text-view',
  description: 'Vue.js 3 text-view component',
  base: '/text-view/',
  themeConfig: {
    logo: { src: '/images/logo.png', width: 24, height: 24 },
    socialLinks: [{ icon: 'github', link: 'https://github.com/au1996/text-view' }],
    repo: 'au1996/text-view',
    docsRepo: 'au1996/text-view',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    nav: [{ text: '指南', link: '/installation' }],
    sidebar: [
      {
        text: '阅读指南',
        items: [
          { text: '安装', link: '/installation' },
          { text: '配置', link: '/configs' },
          { text: '示例', link: '/examples' },
        ],
      },
    ],
  },
}
