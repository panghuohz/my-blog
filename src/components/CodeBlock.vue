<script setup>
import { onMounted, ref, useSlots, nextTick } from 'vue';

const props = defineProps({
    language: String,
    highlightLines: String, // 用于传递行高亮的范围，如 "2,4-5"
});

const codeContent = ref(''); // 用来存储代码内容
// 使用 `defineSlots` 来接收插槽内容
const slots = useSlots();



onMounted(() => {
    // 执行 Prism 高亮
    Prism.highlightAll();

    // 设置代码内容
    const codeElement = document.querySelector('pre code');
    if (codeElement) {
        codeContent.value = codeElement.innerText;
    }
    // nextTick(() => {
    //     // 从插槽中提取代码内容
    //     const slotContent = slots.default && slots.default()[0];
    //     console.log(slotContent);

    //     if (slotContent) {
    //         codeContent.value = slotContent.children; // 获取插槽的内容
    //     }
    // });
});

function copyToClipboard(code) {
    navigator.clipboard.writeText(code).then(
        () => alert('代码已复制到剪贴板！'),
        () => alert('复制失败，请手动复制。')
    );
}
</script>

<template>
    <!-- <button class="copy-btn" @click="copyToClipboard(codeContent)">复制</button> -->
    <div>
        <pre :data-line="highlightLines"><code :class="`hljs language-javascript`">`{const java='123'}`</code></pre>
    </div>

</template>

<style scoped>
.code-block {
    position: relative;
    margin-bottom: 1em;
}

.code-block .copy-btn:hover {
    opacity: 1;
}

.copy-btn {
    position: -webkit-sticky;
    position: sticky;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
    top: calc((5rem, 0px) + 8rem);
    transform: translateX(calc(8px* -1));
    margin-block: 8px;
    margin-left: auto;
    margin-right: 0;
    border: 1px solid;
    color: hsl(210deg 20% 77%);
    border-radius: 5px;
    opacity: 0;
    transition: opacity .25s;
    transition-delay: 1s;
}

.copy-btn:hover {
    background-color: #0056b3;
}
</style>
