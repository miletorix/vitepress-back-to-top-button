import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vitepress-back-to-top-button",
  base: '/vitepress-back-to-top-button/',
  description: "A lightweight Back-to-Top button Vue 3 component for VitePress. Features smooth scroll, progress ring indicating scroll percentage, dark/light theme support.",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'favicon.png' }],
  ],
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin()
    ],
  },
  themeConfig: {
    logo: 'favicon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github Page', link: 'https://github.com/miletorix/miletorix-vitepress-image-group' },
      { text: 'NPM Page', link: 'https://www.npmjs.com/package/@miletorix/vitepress-image-group' }
    ],
    sidebar: [
      { text: 'Home', link: '/index' },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/miletorix' }
    // ]
  }
})