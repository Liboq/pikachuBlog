import { createRouter,RouteRecordRaw,createWebHistory } from "vue-router";

const routes : Array<RouteRecordRaw> = [
    {
        path:'/home',
        name:'home',
        component: import("../page/home/index.vue")
    },{
        path: '/markdown',
        name: 'markdown',
        component: () => import('../page/markdown/index.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router