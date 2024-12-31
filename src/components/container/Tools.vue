<!-- frameworks and tools -->
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';


// 定义响应式变量
const cards = ref([]); // 存储格子数量
const columns = ref(0); // 每行的格子数量
const toolsList = ref([
    { name: 'Vue', icon: '../assets/img/vue.svg' },
    { name: 'HTML', icon: '../assets/img/.svg' },
    { name: 'CSS', icon: '../assets/img/SpringBoot.svg' },
    { name: 'JavaScript', icon: '../assets/img/SpringBoot.svg' },
    { name: 'Element-ui', icon: '../assets/img/spring.svg' },
    { name: 'Vant-Weapp', icon: '../assets/img/spring.svg' },
    { name: 'tailwind-css', icon: '../assets/img/spring.svg' },
    { name: 'spring', icon: '../assets/img/spring.svg' },
    { name: 'Redis', icon: '../assets/img/spring.svg' },
    { name: 'MySQL,', icon: '../assets/img/SpringBoot.svg' },
    { name: 'Docker', icon: '../assets/img/spring.svg' },
    { name: 'Git', icon: '../assets/img/spring.svg' },
    { name: 'Java', icon: '../assets/img/SpringBoot.svg' },
]);

const debouncedUpdateGridCount = debounce(updateGridCount, 200);

// 计算可显示的格子
function shouldShow(index) {
    const perRow = columns.value;
    if (perRow <= 0) return false; // 避免错误

    // 计算每行的起始和结束索引
    const start = Math.floor((perRow) / 2 - 3); // 居中格子开始
 

    const end = perRow - start - 2; // 居中格子结束

    return index >= start && index <= end;
}

// 更新格子数量
function updateGridCount() {
    const cardWidth = 96; // 假设每个格子的宽度
    const gap = 24; // 格子之间的间距
    const screenWidth = window.innerWidth;

    // 计算每行能容纳多少个格子
    const cols = Math.ceil((screenWidth - gap) / (cardWidth + gap)); // 减去间距的宽度
    columns.value = cols;


    // 根据每行的格子数动态生成格子数组
    cards.value = Array.from({ length: cols }, (_, i) => i + 1);
}

// 在组件挂载时初始化
onMounted(() => {
    updateGridCount();
    window.addEventListener('resize', debouncedUpdateGridCount);
});

// 在组件卸载时清理
onBeforeUnmount(() => {
    window.removeEventListener('resize', debouncedUpdateGridCount);
});

// 防抖函数
function debounce(callback, wait) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => callback.apply(this, args), wait);
    };
}

</script>


<template>
    <section>
        <div class="pb-[10rem] mt-20">
            <div class="tools-title md:text-[3rem] text-[2.2rem]">
                <span class="block">The tools and frameworks</span>
                <span>I like to use</span>
            </div>
            <div class="w-full bg-[#26262626] relative overflow-hidden frameworks-container">
                <div class="framework-row " style="transform: translate3d(var(--row-offset), 0, 0)">
                    <div class="opacity-100 framework-card" v-for="(card, index) in cards" :key="index">

                    </div>
                </div>
                <div class="framework-row" style="transform: translate3d(var(--row-offset), 0, 0)">
                    <template v-for="(card, index) in cards" :key="index">
                        <div v-if="!shouldShow(index)"
                            class="opacity-100 framework-card hover:scale-90 duration-[3s] hover:transition-transform">
                        </div>
                        <a href="" v-if="shouldShow(index)" class="framework-card">
                            <img class="w-full h-full" src="../../assets/img/docusaurus.svg" alt="docusaurus">
                        </a>
                    </template>
                </div>
                <div class="framework-row" style="transform: translate3d(var(--row-offset), 0, 0)">
                    <div class="opacity-100 framework-card hover:scale-90 duration-[3s] hover:transition-transform"
                        v-for="(card, index) in cards" :key="index">
                        <img v-if="shouldShow(index)" class="w-full h-full" src="../../assets/img/idea.svg"
                            alt="docusaurus">
                    </div>
                </div>
                <div class="framework-row" style="transform: translate3d(var(--row-offset), 0, 0)">
                    <div class="opacity-100 framework-card hover:scale-90 duration-[3s] hover:transition-transform"
                        v-for="(card, index) in cards" :key="index"></div>
                </div>
                <div class="framework-row" style="transform: translate3d(var(--row-offset), 0, 0)">
                    <div class="hidden framework-card hover:scale-90 duration-[3s] hover:transition-transform md:block"
                        v-for="(card, index) in cards" :key="index"></div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
@media (min-width: 840px) {
    .frameworks-container {
        -webkit-mask-image: linear-gradient(90deg,
                transparent 0%,
                #ffffff 300px,
                #ffffff calc(100vw - 300px),
                transparent 100%);
        mask-image: linear-gradient(90deg,
                transparent 0%,
                #ffffff 300px,
                #ffffff calc(100vw - 300px),
                transparent 100%);
    }
}

.framework-row:nth-child(odd) {
    --row-offset: 12px;
}

.framework-row:nth-child(2n) {
    --row-offset: 56px;
}

.frameworks-container:before,
.frameworks-container::before {
    content: "";
    display: block;
    width: 100%;
    height: 80px;
    background: linear-gradient(0deg, #09090900, #070707b3, #090909);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    pointer-events: none;
}

.frameworks-container:after,
.frameworks-container::after {
    content: "";
    display: block;
    width: 100%;
    height: 80px;
    background: linear-gradient(180deg, #09090900, #070707b3, #090909);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    pointer-events: none;
}

.framework-row {
    display: grid;
    grid-auto-columns: 96px;
    grid-gap: 24px;
    justify-content: flex-start;
    margin-bottom: 24px;
    position: relative;
    white-space: nowrap;
    grid-auto-flow: column;
}

.framework-card {
    width: 96px;
    height: 96px;
    border-radius: 12px;
    border: 1px solid rgba(38, 38, 38, 0.7);
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    --glow-color: rgba(0, 0, 0, 0);
    /* opacity: 0; */
    transition: opacity 0.4s ease;
    -webkit-user-select: none;
    user-select: none;
    transform: scale(1) translateZ(0);
    transition: transform 3s ease;
    /* filter: drop-shadow(0 0 0.8rem color-mix(in srgb, #00d6fd 40%, transparent)); */
}

.framework-card:has(img) {
    cursor: pointer;
    position: relative;
}

.framework-card:hover:not(a) {
    transform: scale(.9) translateZ(0);
    transition: transform .2s ease-in-out;
}

.framework-card img {
    -webkit-user-select: none;
    user-select: none;
    height: auto;
    max-width: 100%;
    filter: drop-shadow(0 0 0.8rem color-mix(in srgb, #00d6fd 40%, transparent));
}

.tools-title {
    background: linear-gradient(0deg, #fff, #ffffffc2);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: 668px;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 3;
    letter-spacing: -0.88px;
}
</style>
