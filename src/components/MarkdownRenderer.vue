<template>
    <div v-html="renderedContent"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as shiki from 'shiki';
 

export default {
    name: 'MarkdownRenderer',
    props: {
        content: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const renderedContent = ref('');

        // 使用 onMounted 钩子来处理 Markdown 和代码高亮
        onMounted(async () => {
            // 初始化 Markdown-it 和 Shiki
            const md = new MarkdownIt();
            const highlighter = await shiki.getHighlighter({ theme: 'nord' });

            // 渲染 Markdown 内容
            const content = md.render(props.content);

            // 使用 Shiki 对代码块进行高亮
            const highlightedContent = content.replace(
                /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g,
                (match, lang, code) => {
                    const highlightedCode = highlighter.codeToHtml(code, { lang });
                    return `<pre><code class="language-${lang}">${highlightedCode}</code></pre>`;
                }
            );

            renderedContent.value = highlightedContent;
        });

        return {
            renderedContent
        };
    }
};
</script>