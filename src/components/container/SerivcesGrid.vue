<!--  -->
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// 获取 DOM 引用
const gradientDiv = ref(null);

const serviceList = ref([
    { icon: "", title: "咨询", content: "将您的网络形象转化为数字成功模式。" },
    { icon: "", title: "设计", content: "独特的设计让您在竞争中脱颖而出。" },
    { icon: "", title: "发展", content: "从CMS内容管理系统到定制编程。" },
    { icon: "", title: "用户体验", content: "为用户提供的不仅仅是信息，更是一种体验。" },
    { icon: "", title: "优化", content: "有些领域对成功尤为重要。" },
    { icon: "", title: "关心", content: "你负责你的愿景，我负责你的网络形象。" }
])

// 鼠标移动事件处理函数
function handleMouseMove(event) {
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
    window.removeEventListener('mousemove', handleMouseMove);
});
</script>


<template>
    <section>
        <div
            class="pb-[10rem] mt-20 relative bg-dark xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm px-6 mx-auto">
            <div
                class="relative z-50 md:text-[3rem] text-center text-[24px] flex justify-center items-center flex-col gap-4">
                <span>
                    <img alt="🤔" loading="lazy" width="78" height="78" decoding="async" data-nimg="1"
                        src="../../assets/img/1f914.webp" style="color: transparent;flex: 0 0 auto;">
                </span>
                <span class="section-text">What can I do</span>
                <span class="md:text-[24px] text-[16px] text-[#909090]">我的使命是创建出色的在线形象，并建立一个支持、激励和连接其他开发者的社区</span>
            </div>
            <div class="services-grid relative z-50 mt-10 ">
                <div class="grid relative grid-cols-services-xl xl:grid-cols-services-2xl gap-5" ref="gradientDiv">
                    <div v-for="i in 6"
                        class="card relative border border-[--color-black-30] bg-[--color-black-65] cursor-pointer rounded-xl xl:py-6 xl:px-9 p-5">
                        <div class="flex xl:inline-block items-center gap-4 pb-4 ">
                            <div
                                class="flex items-center justify-center w-14 aspect-square bg-[--color-black-50] border border-[--color-black-20] rounded-lg xl:mb-5 mb-0">
                                <svg class="fill-[--color-gray-50] w-[55%]" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" role="img">
                                    <path
                                        d="M13,0h-2c-1.1,0-2,.9-2,2V24h6V2c0-1.1-.9-2-2-2Zm0,22h-2V2h2V22ZM22,6h-2c-1.1,0-2,.9-2,2V24h6V8c0-1.1-.9-2-2-2Zm0,16h-2V8h2v14ZM4,12H2c-1.1,0-2,.9-2,2v10H6V14c0-1.1-.9-2-2-2Zm0,10H2V14h2v8Z">
                                    </path>
                                </svg>
                            </div>
                            <h4 class="sm:text-[2rem] text-[1.65rem] head-txt text-white">Consulting</h4>
                        </div>
                        <p class="font-light leading-7 text-[#909090] text-[1.3rem]">Transformation deiner
                            Webpräsenz
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

.card::after,
.card:after {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    background-attachment: fixed;
    background-image: radial-gradient(circle at var(--x, 0) var(--y, 0), hsl(0 0% 100% / 0.75), transparent 5.2rem);
    border-radius: inherit;
    pointer-events: none;
}

.section-text {
    background-image: linear-gradient(-45deg, #ffcb47, #e34ba9, #369eff, #95f3d9);
    -webkit-background-size: 400% 400%;
    background-size: 400% 400%;
    position: relative;
    font-weight: 700;
    z-index: 5;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
