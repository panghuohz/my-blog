import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import vue from '@vitejs/plugin-vue'
import mdx from '@mdx-js/rollup'
import rehypePrettyCode from 'rehype-pretty-code'

// import { transformerCopyButton } from '@rehype-pretty/transformers' //目前这个插件有bug
// import remarkToc from 'remark-toc'

function generatePostMetadata() {
  const postsDir = path.resolve("./src", 'posts');
  const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.mdx'));
  const postMetadata = files.map((file) => {
    const content = fs.readFileSync(path.resolve(postsDir, file), 'utf-8');
    const titleMatch = content.match(/#\s*(.*)\n/); // 匹配标题
    const introMatch = content.match(/(?:\*\*|__)(.*?)\*\*/); // 匹配简介
    return {
      slug: file.replace('.mdx', ''),
      title: titleMatch ? titleMatch[1] : '无标题',
      intro: introMatch ? introMatch[1] : '无简介',
    };
  });
  fs.writeFileSync(path.resolve(__dirname, 'public/postMetadata.json'), JSON.stringify(postMetadata));
}



const prettyCodeOptions = {
  grid: true,
  theme: 'night-owl',
  keepBackground: false,
  bypassInlineCode: true,
  // transformers: [
  //   transformerCopyButton({
  //     visibility: 'hover',
  //     feedbackDuration: 3_000,
  //   }),
  // ],
}

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'generate-post-metadata',
      buildStart: generatePostMetadata, // 开发和构建阶段都生成元数据
    },
    mdx({
      jsxImportSource: 'vue',  // 使用 Vue 作为 JSX 源
      // jsx: true,
      // remarkPlugins: [remarkToc], // 使用 remark-toc 自动生成目录
      rehypePlugins: [
        [rehypePrettyCode, prettyCodeOptions],
      ]
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.cjs', '.mjs', '.md', '.mdx'],
    alias: {
      '@': path.resolve(__dirname, './src'), // 定义 @ 为 src 目录
    },
  },
})
