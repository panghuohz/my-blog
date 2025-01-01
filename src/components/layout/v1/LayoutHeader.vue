<!--  -->
<script setup>
import { RouterLink } from 'vue-router';

// import { ref } from 'vue';
// function menuToggle() {
//     console.log('menuToggle');
// }
</script>


<template>
    <header class="bg-h-box text-white flex h-[4rem] bg-color-mix sticky z-[100] flex-col top-0 w-full">
        <div class="px-[1.5rem] flex h-full items-center justify-between mx-auto w-full md:px-[2rem] container">
            <RouterLink to="/"
                class=" inline-flex items-center justify-center md:text-[1.6rem] text-[1.2rem] font-bold ">
                <span class="mr-[8px]">
                    <img src="@/assets/img/docusaurus.svg" alt="" class="w-[33px] h-[33px]">
                </span>
                <span>A</span>
                <span>MENG</span>
            </RouterLink>
            <div class="flex gap-2">
                <!-- <button @click="menuToggle()" style="transform: scale(1.5);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="s1wls44k">
                        <line x1="3" y1="5" x2="21" y2="5"></line>
                        <line x1="3" y1="12" x2="21" y2="12" style="opacity: 1;"></line>
                        <line x1="3" y1="19" x2="21" y2="19"></line>
                    </svg>
                </button> -->
                <nav>
                    <ul class="flex">
                        <li>
                            <RouterLink class="px-4 py-3 cursor-pointer" to="/blog" exact-active-class="active-link">博客
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink class="px-4 py-3 cursor-pointer transition-all" to="/assets"
                                exact-active-class="active-link">资源
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink class="px-4 py-3 cursor-pointer transition-all" to="/changlog"
                                exact-active-class="active-link">更新
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink class="px-4 py-3 cursor-pointer transition-all" to="/about"
                                exact-active-class="active-link">关于我
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="h-[1px] w-full bg-surface-90"></div>
    </header>
</template>


<style scoped>
.bg-h-box {
    background-color:
        color-mix(in srgb, #09090b 80%, transparent);
    backdrop-filter: blur(12px);
}

.active-link {
    background-color:
        color-mix(in srgb, #27272a calc(100%* 1), transparent);
    border-radius: 4rem;
}
</style>
