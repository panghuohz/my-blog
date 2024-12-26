<!--  -->
<script setup>
// TODO 文本内容是否需要提取到配置文件
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Social from './Social.vue';

const loading = ref(false);

// 处理图片加载事件
function onImageLoad() {
    loading.value = true;
}

</script>


<template>
    <section id="hero">
        <div class="relative w-full overflow-hidden dark:bg-dark text-white">
            <div
                class="relative xl:h-[57rem] md:h-[57rem] sm:h-[53rem]  h-[50rem] w-full   mx-auto lg:max-w-screen-lg md:max-w-screen-md 2xl:max-w-screen-2xl xl:max-w-screen-xl">
                <div class="absolute top-0 z-10 w-[100vw] md:left-12 md:h-full left-0 h-[60rem]"
                    style="background-color: color(srgb 0.0352941 0.0352941 0.0431373);background-image:linear-gradient(to right, color-mix(in srgb, rgb(39, 39, 42) 80%, transparent) 30%, color-mix(in srgb, rgb(9, 9, 11) 100%, transparent));">
                </div>
                <div class="md:absolute relative w-full h-full overflow-hidden">
                    <div
                        class="flex mx-auto md:top-[12rem] pt-[2.5rem] lg:pt-0 sm:pt-[3rem] max-w-[34rem] items-center md:absolute relative flex-col z-50 md:pl-[1.5rem] md:items-start">
                        <div class="px-3 py-2 border border-[#3f3f46] rounded-3xl md:text-[.875rem] md:leading-5 text-[.75rem] leading-4 mb-4"
                            style="background-image:linear-gradient(color-mix(in srgb, rgb(24, 24, 27) 50%, transparent), color-mix(in srgb, rgb(39, 39, 42) 50%, transparent));">
                            不做思考的巨人，行动的矮子
                        </div>
                        <div
                            class="md:text-[3rem] text-[2.75rem] leading-[1.25] font-bold md:text-left text-center flex md:items-start justify-center flex-col tracking-[-0.88px]">
                            <span>Hi 👋 I am PANG HU</span>
                        </div>
                        <div class="md:mt-7 md:mb-5 mt-5 mb-4 gap-2 flex items-center ">
                            <span class="text-xs opacity-70">Me Skill</span>
                            <span class="inline-flex gap-1 items-center">
                                <img src="../../assets/img/java.svg" alt="java" class="h-5 w-5 block">
                                <span class="text-xs opacity-70 sm:block hidden">JAVA</span>
                            </span>
                            <span class="inline-flex gap-1 items-center">
                                <img src="../../assets/img/vue.svg" alt="Vue" class="h-5 w-5 block" />
                                <span class="text-xs opacity-70 sm:block hidden">VUE</span>
                            </span>
                            <span class="text-[#a1a1aa] text-xs leading-5 text-center w-3">|</span>
                            <span class="inline-flex gap-1 items-center">
                                <img src="../../assets/img/docker.svg" alt="Docker" class="h-5 w-5 block">
                                <span class="text-xs opacity-70 sm:block hidden">DOCKER</span>
                            </span>
                            <span class="inline-flex gap-1 items-center">
                                <img src="../../assets/img/mysql.svg" alt="MySQL" class="h-5 w-5 block">
                                <span class="text-xs opacity-70 sm:block hidden">MYSQL</span>
                            </span>
                            <span class="inline-flex gap-1 items-center">
                                <img src="../../assets/img/linux.svg" alt="Linux" class="h-5 w-5 block">
                                <span class="text-xs opacity-70 sm:block hidden">LINUX</span>
                            </span>
                        </div>
                        <span
                            class="xl:text-[1.25rem] text-[#d4d4d8] md:text-[1rem] text-[0.875rem] sm:text-[0.875rem] text-center leading-6  md:leading-7 md:text-left md:max-w-[30rem] max-w-[24rem] mb-5">I'm
                            a <span class="text-white">Java</span> developer and currently learning front-end knowledge.
                        </span>
                        <Social />
                    </div>
                    <div
                        class="absolute md:w-full md:h-full md:top-0 w-[200%] h-full top-[-13rem] left-0 flex z-20 right-0 xl:left-[-0.5rem] sm:top-[-8rem] md:left-[-5rem]">
                        <svg width="669" height="878" viewBox="0 0 669 878" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="md:block hidden">
                            <path
                                d="M458.638 0H0V826H620.766C625.866 826 630 821.866 630 816.766C630 815.487 629.734 814.222 629.22 813.051L620.908 794.134C620.676 793.604 620.397 793.096 620.077 792.615L612.778 781.65C611.177 779.246 610.694 776.268 611.453 773.481L614.549 762.115C615.107 760.063 614.998 757.887 614.235 755.902L611.782 749.515C611.342 748.37 611.117 747.155 611.117 745.929V742.467C611.117 739.817 610.065 737.276 608.193 735.401L607.27 734.476C604.441 731.643 603.74 727.319 605.528 723.737C606.373 722.045 606.682 720.135 606.415 718.263L605.534 712.084C605.27 710.234 604.061 708.655 602.344 707.919C600.376 707.074 599.101 705.138 599.101 702.997V699.331C599.101 697.316 598.395 695.364 597.106 693.815C595.636 692.048 594.932 689.769 595.149 687.481L596.178 676.667C596.402 674.303 595.779 671.937 594.419 669.991L593.873 669.21C591.841 666.303 591.757 662.46 593.659 659.467C595.42 656.696 595.488 653.173 593.835 650.336L592.452 647.961C591.255 645.906 591.243 643.369 592.422 641.303C593.392 639.604 593.566 637.564 592.898 635.725L591.583 632.105C590.889 630.193 590.795 628.116 591.311 626.15L593.951 616.104C594.508 613.986 594.354 611.744 593.512 609.721L591.851 605.729C591 603.683 591.027 601.377 591.926 599.352C593.167 596.555 592.721 593.298 590.774 590.938L579.454 577.215C578.27 575.78 577.51 574.043 577.259 572.2L575.273 557.612C575.137 556.616 574.852 555.647 574.428 554.737L571.098 547.591C569.81 544.828 569.854 541.628 571.216 538.9L571.781 537.768C572.253 536.823 572.572 535.809 572.727 534.764L575.812 513.905C575.888 513.392 576.004 512.885 576.159 512.39L579.764 500.837C580.065 499.872 580.218 498.868 580.218 497.858V492.09C580.218 490.665 579.913 489.256 579.324 487.957L576.821 482.442C576.231 481.144 575.926 479.735 575.926 478.309V472.661C575.926 472.139 575.967 471.618 576.048 471.103L578.379 456.32C578.461 455.805 578.501 455.284 578.501 454.763V433.049C578.501 432.576 578.468 432.104 578.401 431.637L575.926 414.289L573.632 402.036C573.446 401.042 573.111 400.083 572.637 399.19L559.835 375.058C559.128 373.725 558.731 372.249 558.675 370.741L558.061 354.135C557.96 351.384 556.729 348.797 554.658 346.983L553.325 345.815C551.832 344.507 550.763 342.785 550.252 340.867L541.072 306.395C540.849 305.555 540.736 304.69 540.736 303.821V276.085C540.736 273.748 539.917 271.485 538.422 269.688L530.174 259.777C528.68 257.98 527.861 255.717 527.861 253.38V238.128C527.861 236.964 527.658 235.809 527.26 234.715L525.905 230.983C524.963 228.386 522.988 226.296 520.45 225.206L518.468 224.356C514.793 222.779 512.411 219.165 512.411 215.166V203.895C512.411 202.084 511.92 200.308 510.99 198.755L498.384 177.715C497.453 176.163 496.962 174.386 496.962 172.576V159.553C496.962 157.521 496.343 155.538 495.188 153.866L489.743 145.991C489.406 145.504 489.027 145.048 488.608 144.629L486.373 142.391C484.093 140.108 483.892 136.478 485.906 133.958L486.094 133.723C487.91 131.449 487.826 128.198 485.894 126.021C483.884 123.757 483.884 120.347 485.894 118.083L486.741 117.129C488.31 115.361 488.942 112.951 488.443 110.64L482.596 83.5573C482.446 82.8638 482.371 82.1563 482.371 81.4468V63.6007C482.371 60.8975 481.099 58.3518 478.937 56.7284C476.776 55.105 475.504 52.5593 475.504 49.8561V47.1141C475.504 44.4644 474.452 41.923 472.58 40.048L471.562 39.028C469.689 37.153 468.638 34.6116 468.638 31.9619V10C468.638 4.47715 464.16 0 458.638 0Z"
                                class="bg-svg-xl"></path>
                        </svg>
                        <svg width="768" height="737" viewBox="0 0 768 737" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="md:hidden block">
                            <path
                                d="M826 404.638V-54L0 -54L0 566.766C0 571.866 4.1344 576 9.23444 576C10.5134 576 11.7783 575.734 12.9492 575.22L31.8662 566.908C32.3956 566.676 32.9038 566.397 33.3852 566.077L44.3495 558.778C46.7536 557.177 49.7322 556.694 52.5189 557.453L63.8848 560.549C65.9365 561.107 68.1129 560.998 70.0979 560.235L76.4854 557.782C77.6296 557.342 78.845 557.117 80.0708 557.117H83.5331C86.1829 557.117 88.7242 556.065 90.5992 554.193L91.5238 553.27C94.3568 550.441 98.6808 549.74 102.263 551.528C103.955 552.373 105.865 552.682 107.737 552.415L113.916 551.534C115.766 551.27 117.345 550.061 118.081 548.344C118.926 546.376 120.862 545.101 123.003 545.101H126.669C128.684 545.101 130.636 544.395 132.185 543.106C133.952 541.636 136.231 540.932 138.519 541.149L149.333 542.178C151.697 542.402 154.063 541.779 156.009 540.419L156.79 539.873C159.697 537.841 163.54 537.757 166.533 539.659C169.304 541.42 172.827 541.488 175.664 539.835L178.039 538.452C180.094 537.255 182.631 537.243 184.697 538.422C186.396 539.392 188.436 539.566 190.275 538.898L193.895 537.583C195.807 536.889 197.884 536.795 199.85 537.311L209.896 539.951C212.014 540.508 214.256 540.354 216.279 539.512L220.271 537.851C222.317 537 224.623 537.027 226.648 537.926C229.445 539.167 232.702 538.721 235.062 536.774L248.785 525.454C250.22 524.27 251.957 523.51 253.8 523.259L268.388 521.273C269.384 521.137 270.353 520.852 271.263 520.428L278.409 517.098C281.172 515.81 284.372 515.854 287.1 517.216L288.232 517.781C289.177 518.253 290.191 518.572 291.236 518.727L312.095 521.812C312.608 521.888 313.115 522.004 313.61 522.159L325.163 525.764C326.128 526.065 327.132 526.218 328.142 526.218H333.91C335.335 526.218 336.744 525.913 338.043 525.324L343.558 522.821C344.856 522.231 346.265 521.926 347.691 521.926H353.339C353.861 521.926 354.382 521.967 354.897 522.048L369.68 524.379C370.195 524.461 370.716 524.501 371.237 524.501H392.951C393.424 524.501 393.896 524.468 394.363 524.401L411.711 521.926L423.964 519.632C424.958 519.446 425.917 519.111 426.81 518.637L450.942 505.835C452.275 505.128 453.751 504.731 455.259 504.675L471.865 504.061C474.616 503.96 477.203 502.729 479.017 500.658L480.185 499.325C481.493 497.832 483.215 496.763 485.133 496.252L519.605 487.072C520.445 486.849 521.31 486.736 522.179 486.736H549.915C552.252 486.736 554.515 485.917 556.312 484.422L566.223 476.174C568.02 474.68 570.283 473.861 572.62 473.861H587.872C589.036 473.861 590.191 473.658 591.285 473.26L595.017 471.905C597.614 470.963 599.704 468.988 600.794 466.45L601.644 464.468C603.221 460.793 606.835 458.411 610.834 458.411H622.105C623.916 458.411 625.692 457.92 627.245 456.99L648.285 444.384C649.837 443.453 651.614 442.962 653.424 442.962H666.447C668.479 442.962 670.462 442.343 672.134 441.188L680.009 435.743C680.496 435.406 680.952 435.027 681.371 434.608L683.609 432.373C685.892 430.093 689.522 429.892 692.042 431.906L692.277 432.094C694.551 433.91 697.802 433.826 699.979 431.894C702.243 429.884 705.653 429.884 707.917 431.894L708.871 432.741C710.639 434.31 713.049 434.942 715.36 434.443L742.443 428.596C743.136 428.446 743.844 428.371 744.553 428.371H762.399C765.103 428.371 767.648 427.099 769.272 424.937C770.895 422.776 773.441 421.504 776.144 421.504H778.886C781.536 421.504 784.077 420.452 785.952 418.58L786.972 417.562C788.847 415.689 791.388 414.638 794.038 414.638H816C821.523 414.638 826 410.16 826 404.638Z"
                                class="bg-svg-sm"></path>
                        </svg>
                    </div>
                </div>
                <!-- 滚动 -->
                <div
                    class="absolute flex xl:left-[34rem] md:top-[-16rem] top-[-1.5rem] left-0 px-3 md:left-[30rem] sm:top-80 md:px-0 md:gap-6 h-auto w-full z-10 md:translate-x-0 md:translate-y-0 md:rotate-[-14deg] md:skew-x-0 md:skew-y-0 md:scale-y-100 md:scale-x-100">
                    <div
                        class="flex  md:w-[20rem] md:h-[85rem] h-[64rem] md:absolute left-0 relative gap-3 sm:top-auto overflow-hidden flex-col mx-2 top-20">
                        <div class="animate-marquee-reversed gap-3 flex flex-col w-full">
                            <div class="relative w-full">
                                <div class="h-[312px]" v-show="!loading">
                                    <div class="relative w-full h-full p-skeleton overflow-hidden"
                                        style="background-color: rgba(255,255,255,0.06);border-radius: 6px">
                                    </div>
                                </div>
                                <img class="w-full h-auto" @load="onImageLoad" v-show="loading"
                                    style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img1-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <div class="h-[153px]" v-show="!loading">
                                    <div class="relative w-full h-full p-skeleton overflow-hidden"
                                        style="background-color: rgba(255,255,255,0.06);border-radius: 6px">
                                    </div>
                                </div>
                                <img class="w-full h-auto" @load="onImageLoad" v-show="loading"
                                    style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img2-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <div class="h-[222px]" v-show="!loading">
                                    <div class="relative w-full h-full p-skeleton overflow-hidden"
                                        style="background-color: rgba(255,255,255,0.06);border-radius: 6px">
                                    </div>
                                </div>
                                <img class="w-full h-auto" @load="onImageLoad" v-show="loading"
                                    style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img3-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img4-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img5-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img6-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img7-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img8-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img9-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <div class="h-[312px]" v-show="!loading">
                                    <div class="relative w-full h-full p-skeleton overflow-hidden"
                                        style="background-color: rgba(255,255,255,0.06);border-radius: 6px">
                                    </div>
                                </div>
                                <img class="w-full h-auto" @load="onImageLoad" v-show="loading"
                                    style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img1-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <div class="h-[153px]" v-show="!loading">
                                    <div class="relative w-full h-full p-skeleton overflow-hidden"
                                        style="background-color: rgba(255,255,255,0.06);border-radius: 6px">
                                    </div>
                                </div>
                                <img class="w-full h-auto" @load="onImageLoad" v-show="loading"
                                    style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img2-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <div class="h-[222px]" v-show="!loading">
                                    <div class="relative w-full h-full p-skeleton overflow-hidden"
                                        style="background-color: rgba(255,255,255,0.06);border-radius: 6px">
                                    </div>
                                </div>
                                <img class="w-full h-auto" @load="onImageLoad" v-show="loading"
                                    style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img3-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img4-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img5-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img6-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img7-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img8-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col1-img9-dark.png"
                                    alt="">
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex md:w-[20rem] md:h-[85rem] h-[64rem] md:absolute relative gap-3 md:left-[21rem] sm:top-auto overflow-hidden flex-col mx-2">
                        <div class="animate-marquee gap-3 flex flex-col w-full">
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img1-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img2-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img3-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img4-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img5-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img6-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img7-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img8-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img9-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img1-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img2-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img3-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img4-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img5-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img6-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img7-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img8-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col2-img9-dark.png"
                                    alt="">
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex md:w-[20rem] md:h-[85rem] h-[64rem] md:absolute relative gap-3 md:left-[42rem] sm:top-auto overflow-hidden flex-col mx-2 top-20">
                        <div class="animate-marquee-reversed gap-3 flex flex-col w-full">
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img1-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img2-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img3-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img4-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img5-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img6-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img7-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img8-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img9-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img1-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img2-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img3-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img4-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img5-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img6-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img7-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img8-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col3-img9-dark.png"
                                    alt="">
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex md:w-[20rem] w-0 md:h-[85rem] h-[64rem] md:absolute relative gap-3 md:left-[63rem] sm:top-auto overflow-hidden flex-col mx-2">
                        <div class="animate-marquee gap-3 flex flex-col w-full">
                            <div class="relative w-full" v-for="i in 9">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img1-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img2-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img3-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img4-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img5-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img6-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img7-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img8-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img9-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img1-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img2-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img3-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img4-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img5-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img6-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img7-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img8-dark.png"
                                    alt="">
                            </div>
                            <div class="relative w-full">
                                <img class="w-full h-auto " style="transition: opacity 0.3s ease-in-out 0s;"
                                    src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/app/hero/hero-col4-img9-dark.png"
                                    alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="h-[1px] w-full bg-[#27272a]"></div>
    </section>
</template>


<style scoped>
.animate-marquee-reversed {
    animation: marquee-reversed 64s linear infinite;
}

.animate-marquee {
    animation: marquee 64s linear infinite;
}

@keyframes marquee-reversed {
    0% {
        transform: translateY(-50%);
    }

    100% {
        transform: translateY(0);
    }
}

@keyframes marquee {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-50%);
    }
}

.bg-svg-xl {
    fill: color(srgb 0.0352941 0.0352941 0.0431373);
}

.bg-svg-sm {
    fill: color-mix(in srgb, #09090b 100%, transparent);
}

@keyframes p-skeleton-animation {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(180%);
    }
}

.p-skeleton:after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
}
</style>
