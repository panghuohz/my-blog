<!-- 首页 -->
<script setup>


import Tools from '../components/container/Tools.vue';
import Hero from '../components/container/Hero.vue';
import OpenSoucre from '../components/container/OpenSoucre.vue';
import SerivcesGrid from '../components/container/SerivcesGrid.vue';
import { RouterView } from 'vue-router';



</script>


<template>

    <Hero />

    <SerivcesGrid />

    <Tools />

    <OpenSoucre />

    <RouterView />
</template>


<style scoped></style>
