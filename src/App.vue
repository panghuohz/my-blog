<script setup>
import LayoutHeader from '@/components/layout/v1/LayoutHeader.vue';
import LayoutFooter from '@/components/layout/v1/LayoutFooter.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <div class="main flex flex-col min-h-[100vh] relative dark:bg-dark bg-white"> 
    <LayoutHeader v-if="!route.meta.hideLaout" />
    <RouterView />
    <LayoutFooter v-if="!route.meta.hideLaout" />
  </div>
</template>

<style scoped></style>
