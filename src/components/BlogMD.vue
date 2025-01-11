<script setup>
import { onMounted, ref } from 'vue';
 
const MDXContent = ref(null);
const title = ref('');
const intro = ref('');

async function loadMDX() {
  const content = await import('@/posts/demo.mdx');
  MDXContent.value = content.default;
  title.value = content.title;

}

onMounted(() => {
  loadMDX();
});
</script>


<template>
  <div class="prose container mx-auto p-4 sm:p-0 dark:prose-invert">
    <article>
      <h1>{{ title }}</h1>
      <component :is="MDXContent" />
    </article>
  </div>
</template>


<style scoped>
code[data-line-numbers] {
  counter-reset: line;
}

code[data-line-numbers]>[data-line]::before {
  counter-increment: line;
  content: counter(line);

  /* Other styling */
  display: inline-block;
  width: 0.75rem;
  margin-right: 2rem;
  text-align: right;
  color: gray;
}

code[data-line-numbers-max-digits="2"]>[data-line]::before {
  width: 1.25rem;
}

code[data-line-numbers-max-digits="3"]>[data-line]::before {
  width: 1.75rem;
}

code[data-line-numbers-max-digits="4"]>[data-line]::before {
  width: 2.25rem;
}

.prose :where(pre):not(:where([class~="not-prose"], [class~="not-prose"] *)) {
  background-color: #090909 !important;
  border: 1px solid #5f5f5f;
}
</style>
