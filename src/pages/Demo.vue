<script setup>
import { defineAsyncComponent } from 'vue';

// //异步加载组件
const MDXContent = defineAsyncComponent(() => import('../posts/index.mdx'))
 

</script>


<template>
  <div class="prose container mx-auto p-4 sm:p-0 dark:prose-invert">
    <article>
      <MDXContent />
    </article>
  </div>
</template>


<style scoped></style>
