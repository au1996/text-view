export default {
  lang: 'en-US',
  title: 'text-view',
  description: 'Vue.js 3 text-view component',
  base: '/text-view/',
  themeConfig: {
    logo: { src: '/images/logo.png', width: 24, height: 24 },
    repo: 'au1996/text-view',
    docsRepo: 'au1996/text-view',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    nav: [{ text: 'Guide', link: '/getting-started' }],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Configs', link: '/configs' },
          { text: 'Examples', link: '/examples' },
        ],
      },
    ],
  },
}
