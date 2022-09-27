import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueComponent from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import WindiCSS from 'vite-plugin-windicss'
import eslintPlugin from 'vite-plugin-eslint'
import markdown from 'vite-plugin-markdown'
import markdownIt from 'markdown-it'
import highlightjs from 'markdown-it-highlightjs'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  plugins: [
    vue(),
    vueComponent({
      resolvers: IconsResolver({
        compiler: 'vue3',
        prefix: 'i',
      }),
    }),
    Icons(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts'],
    }),
    WindiCSS({
      fileExtensions: ['vue', 'js', 'html'],
    }),
    markdown.plugin({
      mode: ['vue'],
      markdownIt: markdownIt({
        html: true,
        linkify: true,
        typographer: true,
      }).use(highlightjs),
    }),
  ],
})
