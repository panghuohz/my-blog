<!--  -->
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// 获取 DOM 引用
const gradientDiv = ref(null);

function handleMouseMove(event) {
    // 获取元素的相对位置
    const rect = gradientDiv.value.getBoundingClientRect();
    // 计算鼠标相对于该 div 的位置，转换为百分比
    const x = Math.floor(event.clientX);
    const y = Math.floor(event.clientY);

    // 更新该 div 的背景位置
    gradientDiv.value.style.setProperty('--x', `${x}px`);
    gradientDiv.value.style.setProperty('--y', `${y}px`);
}


// 在组件挂载时初始化
onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);
});

// 在组件卸载时清理
onBeforeUnmount(() => {
    window.removeEventListener('mousemove', debounceHandleMouseMove);
});
</script>


<template>
    <!-- 服务 -->
    <section>
        <div
            class="pb-[10rem] mt-20 relative bg-dark xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-[20px] mx-auto">

            <div
                class="relative z-50 md:text-[3rem] text-center text-[24px] flex justify-center items-center flex-col gap-4">
                <span>
                    <img alt="🤔" loading="lazy" width="78" height="78" decoding="async" data-nimg="1"
                        src="https://registry.npmmirror.com/@lobehub/fluent-emoji-anim-3/latest/files/assets/1f914.webp"
                        style="color: transparent;flex: 0 0 auto;">
                </span>
                <span
                    style="-webkit-text-fill-color: transparent;background: linear-gradient(90deg, rgb(255, 248, 85) 0.04%, rgb(70, 227, 183) 100.04%) text;">What
                    I can do</span>
                <span class="md:text-[24px] text-[16px] text-[#909090]">我的使命是创建出色的在线形象，并建立一个支持、激励和连接其他开发者的社区</span>
            </div>
            <div class="services-grid relative z-50 mt-10 ">
                <div class="grid relative grid-cols-services-xl xl:grid-cols-services-2xl gap-4" ref="gradientDiv">
                    <div v-for="i in 6"
                        class="card relative border border-[--color-black-30] bg-[--color-black-65] cursor-pointer rounded-xl xl:py-6 xl:px-9 p-5">
                        <div class="flex xl:inline-block items-center gap-4 pb-4 ">
                            <div
                                class="flex items-center justify-center w-14 aspect-square bg-[--color-black-50] border border-[--color-black-20] rounded-lg xl:mb-5 mb-0">
                                <svg class="fill-[--color-gray-50] w-[55%]" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" role="img" aria-label="Statistics Icon">
                                    <path
                                        d="M13,0h-2c-1.1,0-2,.9-2,2V24h6V2c0-1.1-.9-2-2-2Zm0,22h-2V2h2V22ZM22,6h-2c-1.1,0-2,.9-2,2V24h6V8c0-1.1-.9-2-2-2Zm0,16h-2V8h2v14ZM4,12H2c-1.1,0-2,.9-2,2v10H6V14c0-1.1-.9-2-2-2Zm0,10H2V14h2v8Z">
                                    </path>
                                </svg>
                            </div>
                            <h4 class="text-[2rem] head-txt">Consulting</h4>
                        </div>
                        <p class="font-light leading-7 text-[#909090] text-[1.3rem]">Transformation deiner Webpräsenz
                            in ein digitales Erfolgsmodell.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
.services-grid .card {
    background-attachment: fixed;
    background-image: radial-gradient(circle at var(--x, 0) var(--y, 0), hsla(0, 0%, 100%, 0.1), hsla(0, 0%, 100%, 0.018) 12rem);
}

.card:after {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    background-attachment: fixed;
    background-image: radial-gradient(circle at var(--x, 0) var(--y, 0), hsl(0 0% 100% / 0.75), transparent 5.2rem);
    border-radius: 0.75rem;
    pointer-events: none;
}
</style>
