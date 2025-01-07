<script setup>
import { defineAsyncComponent } from 'vue';
const MDXContent = defineAsyncComponent(() => import('@/posts/demo.mdx')) //异步加载组件

</script>


<template>
  <div class="prose container mx-auto p-4 sm:p-0 dark:prose-invert">
    <article>
      <MDXContent />
    </article>
  </div>
</template>


<style scoped></style>
