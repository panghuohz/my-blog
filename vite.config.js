import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import mdx from '@mdx-js/rollup'
import rehypeHighlight from 'rehype-highlight'
import rehypeHighlightLineNumbers from 'rehype-highlight-code-lines'
import rehypeMdxCodeProps from 'rehype-mdx-code-props'
 
// import vueJsx from '@vitejs/plugin-vue-jsx'
// import remarkToc from 'remark-toc'


export default defineConfig({
  plugins: [
    vue(),
    mdx({
      jsxImportSource: 'vue',  // 使用 Vue 作为 JSX 源
      // jsx: true,
      // remarkPlugins: [remarkToc], // 使用 remark-toc 自动生成目录
      rehypePlugins: [rehypeHighlight,
        [
          rehypeHighlightLineNumbers,
          {
            showLineNumbers: true,      // 显示行号
            lineContainerTagName: 'span'
          }
        ],
        [rehypeMdxCodeProps,
          {
            elementAttributeNameCase: 'html',
            tagName: 'pre'
          }
        ]
      ]
    }),
    // babel({
    //   extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.mdx'], // babel需要处理的文件类型
    //   presets: ['@vue/babel-preset-jsx'], // 处理 Vue 的 JSX 语法
    // }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.cjs', '.mjs', '.md', '.mdx'],
    alias: {
      '@': path.resolve(__dirname, './src'), // 定义 @ 为 src 目录
    },
  }
})
