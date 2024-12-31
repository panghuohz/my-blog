import { createWebHistory, createWebHashHistory, createRouter } from "vue-router";


const routes = [
    { path: "/", component: () => import("../pages/Index.vue"), meta: {} },
    { path: "/about", component: () => import("../pages/AboutMe.vue"), meta: { title: "About" }, },
    { path: "/blog", component: () => import("../pages/Blog.vue"), meta: {} },
    { path: "/changlog", component: () => import("../pages/ChangLog.vue"), meta: {} },
    // 捕获所有未匹配的路径
    { path: "/:pathMatch(.*)*", component: () => import("../pages/NotFound.vue"), meta: { title: "404", hideLaout: true } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;