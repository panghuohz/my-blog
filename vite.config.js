import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mdx from '@mdx-js/rollup'
// import vueJsx from '@vitejs/plugin-vue-jsx'
// import remarkToc from 'remark-toc'
import rehypePrism from 'rehype-prism'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueJsx(),  // 启用 Vue 中的 JSX 支持
    mdx({
      jsxImportSource: 'vue',  // 使用 Vue 作为 JSX 源
      // jsx: true,
      // remarkPlugins: [remarkToc], // 使用 remark-toc 自动生成目录
      rehypePlugins: [rehypePrism] // 配置 Prism.js 插件
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.mdx'], // 添加 .mdx 扩展名
    alias: {
      '@': path.resolve(__dirname, './src'), // 定义 @ 为 src 目录
    },
  }
})
