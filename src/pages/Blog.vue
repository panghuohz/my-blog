<!-- 博客文章 -->
<script setup>



</script>


<template>
    <section class="w-full my-10 dark:text-white text-slate-950">
        <div class="grid-container max-w-screen-xl container mx-auto px-6">
            <div class="">
                <h1 class="text-[2rem] mb-5">最新文章</h1>
                <div class="grid-item">
                    <div style="grid-area: newest;">
                        <ul class="flex flex-col gap-12">
                            <li v-for="i in 10" :key="i">
                                <article>
                                    <a href=""
                                        class="hover:decoration-[#809fff] underline-offset-4 w-full underline decoration-transparent">
                                        <span class="text-[1.5rem]  ">
                                            Vue2和Vue3的区别，Vue3构建时间缩短了10倍</span>
                                    </a>
                                    <p class="dark:text-[#aaa] text-[#666] my-5 text-ellipsis">As the largest
                                        self-storage
                                        company in
                                        the U.S., Extra Space Storage
                                        manages
                                        over 3,800 stores nationwide. Delivering a consistent, high-quality digital
                                        experience to their customers is essential, and their engineering team
                                        recognized the need for faster iteration and more stability in their
                                        customer acquisition channels—public websites and kiosks. However.
                                    </p>
                                    <a href="" class="flex items-center gap-2 relative">
                                        <div>阅读全文</div>
                                        <div class="relative">
                                            <svg width="36" height="12" viewBox="0 0 36 12" fill="none" class="">
                                                <path d="M0.75 6H11.25 M6 0.75L11.25 6L6 11.25" class="opacity-0"
                                                    style="opacity: 1; transition: opacity 125ms;"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </article>
                            </li>
                        </ul>
                    </div>
                    <div style="grid-area: categories;">
                        <h3 class="mb-8">文章标签</h3>
                        <ul class="flex gap-3 dark:text-[#09090b]">
                            <li class="px-2 py-1 bg-[#fafafa] rounded-md ">Java</li>
                            <li class="px-2 py-1 bg-[#fafafa] rounded-md ">Vue</li>
                            <li class="px-2 py-1 bg-[#fafafa] rounded-md ">Spring</li>
                            <li class="px-2 py-1 bg-[#fafafa] rounded-md ">Nuxt</li>
                        </ul>
                    </div>
                    <div style="grid-area: popular;">
                        <div><span>热门文章</span></div>
                        <div>AMENG重磅上线</div>
                    </div>
                </div>
                <!-- <button class="w-[250px] bg-gray-300 mx-auto flex justify-center rounded-xl">
                    <span></span>
                </button> -->
            </div>
        </div>
    </section>

</template>


<style scoped>
.grid-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}



.grdi-container::before {
    content: '';
    position: absolute;
    inset: 0;
    left: calc(-1* 1px);
    top: calc(-1* 1px);
    content: "";
    border: 1px solid hsla(0, 0%, 12%, 1);
    pointer-events: none;
}

path {
    stroke: hsl(225deg 100% 75%);
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.grid-item {
    position: relative;
    display: grid;
    align-items: start;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 0 auto 1fr;
    grid-template-areas:
        "blocker blocker"
        "newest categories"
        "newest popular";
    grid-gap: 64px 96px;
    gap: 64px 96px;
    padding-top: 32px;
    padding-bottom: 96px;
    margin-top: -64px;
}

@media (max-width: 768px) {
    .grid-item {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            "blocker"
            "newest"
            "categories"
            "popular";
    }
}
</style>
