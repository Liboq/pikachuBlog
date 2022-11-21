import { createRouter,RouteRecordRaw,createWebHistory } from "vue-router";

const routes : Array<RouteRecordRaw> = [
    {
        path:'/',
        name: 'main',
        component: ()=> import("../components/layout/index.vue"),
        redirect: '/home',
        children:[
            {
                path:'home',
                name:'home',
                component: () => import("../page/home/index.vue"), 
                 meta: {
                    title: '首页',
                    hideMenu: true,
                  },
            },{
                path: 'markdown',
                name: 'markdown',
                component: () => import('../page/markdown/index.vue'),
                meta: {
                    title: '文章',
                    hideMenu: true,
                  },
            },
            {
                path:'my',
                name:'my',
                component: ()=> import("../page/my/index.vue"),
                meta: {
                    title: '我的',
                    hideMenu: true,
                  },
            },
            {
                path:'message',
                name:'message',
                component: ()=> import("../page/message/index.vue"),
                meta: {
                    title: '留言',
                    hideMenu: true,
                  },
            },  
            {
                path:'gollery',
                name:'gollery',
                component: ()=> import("../page/gollery/index.vue"),
                meta: {
                    title: '图库',
                    hideMenu: true,
                  },
            }
        ]
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router