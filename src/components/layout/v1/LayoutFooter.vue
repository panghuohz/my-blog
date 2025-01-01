<!--底部-->
<script setup>
</script>


<template>
    <footer id="footer" class="py-6 relative pt-20">
        <div
            class="flex w-full flex-col gap-6 overflow-hidden rounded-lg py-6 justify-center md:items-center lg:flex-row lg:gap-14 container mx-auto mb-8 px-[20px]">
            <div class="flex flex-col gap-2 text-center lg:flex-1 lg:gap-4 lg:text-left">
                <div class="text-xl font-bold text-white lg:text-[32px] lg:leading-[48px]">
                    <span class="share-text-color">点燃自我效能，重拾<span class="text-gradient">创造乐趣</span></span>
                </div>
                <div class="text-[18px] text-white opacity-60">保持持续学习能力，借助AI提高学习效率，愚公移山，蚍蜉撼树。</div>
            </div>
            <div class="md:w-[360px] lg:w-auto flex flex-col gap-6 items-center ">
                <a title="" rel="nofollow" target="_blank" class="" href="https://t.me/aipure_official">
                    <div class="text-sm text-white">湘ICP备xxx036305号-x</div>
                </a>
                <a title="" rel="nofollow" target="_blank" class="" href="https://x.com/AIPURE_OFFICIAL">
                    <div class="text-sm text-white">@ 2024 AMENG | All rights reserved.</div>
                </a>
            </div>
        </div>
    </footer>
</template>


<style scoped>
#footer::before,
#footer:before {
    content: '';
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    display: block;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent 0, rgba(255, 255, 255, 0.10) 10%, rgba(255, 255, 255, 0.10) 90%, transparent 100%);
}

.text-gradient {
    background-image: linear-gradient(-45deg, #ffcb47, #e34ba9, #369eff, #95f3d9);
    -webkit-background-size: 400% 400%;
    background-size: 400% 400%;
    border-radius: inherit;
    -webkit-animation: 5s animation-text 5s ease infinite;
    animation: 5s animation-text 5s ease infinite;
    position: relative;
    z-index: 5;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

@keyframes animation-text {
    0% {
        -webkit-background-position: 0% 50%;
        background-position: 0% 50%;
    }

    50% {
        -webkit-background-position: 100% 50%;
        background-position: 100% 50%;
    }

    100% {
        -webkit-background-position: 0% 50%;
        background-position: 0% 50%;
    }
}
</style>
