import { createWebHistory, createWebHashHistory, createRouter } from "vue-router";


const routes = [
    { path: "/", component: () => import("@/pages/Index.vue"), meta: {} },
    { path: "/blog", component: () => import("@/pages/Blog.vue"), meta: {} },
    { path: "/changlog", component: () => import("@/pages/ChangLog.vue"), meta: {} },
    { path: "/demo", component: () => import("@/components/BlogMD.vue"), meta: {} },
    // 捕获所有未匹配的路径
    { path: "/:pathMatch(.*)*", component: () => import("@/pages/NotFound.vue"), meta: { title: "404", hideLaout: true } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        //解决vue页面跳转时，滚动条处于上个页面的位置，由于vue是单页面应用所以滚动条是不会变化的。
        //文档地址 https://router.vuejs.org/zh/api/interfaces/RouterScrollBehavior.html
        if (savedPosition) {
            // 返回到保存的滚动位置（用于浏览器前进、后退）
            return savedPosition;
        } else {
            // 默认滚动到顶部
            return { top: 0 };
        }
    },
});

export default router;