import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import 'virtual:group-icons.css'
// import Layout from './Layout.vue'

import BackToTopButton from '@miletorix/vitepress-back-to-top-button'
import '@miletorix/vitepress-back-to-top-button/style.css'

export default {
  extends: DefaultTheme,
  // Layout,
  enhanceApp(ctx) {
    BackToTopButton(ctx.app)
  }
}