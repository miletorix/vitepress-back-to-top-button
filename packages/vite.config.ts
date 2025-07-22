import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'BackToTopButton',
      fileName: (format) => `back-to-top-button.${format}.js`
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue', 'vitepress', 'vitepress/client', '@siteData', '@theme', '@router', '@vueuse/core'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          vitepress: 'vitepress',
          'vitepress/client': 'vitepressClient'
        },
        format: 'es'
      }
    }
  }
})