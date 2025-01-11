<!--底部-->
<script setup>
</script>


<template>
    <footer id="footer" class="py-6 relative">
        <div class="flex justify-center gap-5 flex-col items-center">
            <a title="" rel="nofollow" target="_blank" class="" href="https://x.com/AIPURE_OFFICIAL">
                <div class="text-sm text-[#6f6f6f]">@ 2024 AMENG | All rights reserved.</div>
            </a>
            <a title="" rel="nofollow" target="_blank" class="" href="https://t.me/aipure_official">
                <div class="text-sm text-[#6f6f6f]">湘ICP备xxx036305号-x</div>
            </a>
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
