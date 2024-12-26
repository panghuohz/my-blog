<!--  -->
<script setup>

</script>


<template>
    <header class="bg-h-box text-white flex h-[4rem] bg-color-mix sticky z-[100] flex-col top-0 w-full">
        <div
            class="px-[1.5rem] flex h-full items-center justify-between mx-auto w-full 2xl:max-w-screen-2xl md:px-[2rem] md:max-w-screen-md sm:max-w-screen-sm xl:max-w-screen-xl lg:max-w-screen-lg">
            <div class="inline-flex items-center justify-center md:text-[1.6rem] text-[1.2rem]">
                <span>Pang</span>
                <span>Hu</span>
            </div>
            <div class="flex gap-2">
                <ul class="flex">
                    <li class="p-3 cursor-pointer">博客</li>
                    <li class="p-3 cursor-pointer">资源</li>
                    <li class="p-3 cursor-pointer">更新日志</li>
                    <li class="p-3 cursor-pointer">关于我</li>
                </ul>
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
</style>
