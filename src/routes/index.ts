import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('../components/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../page/home/index.vue'),
        meta: {
          title: '首页',
          hideMenu: false
        }
      },
      {
        path: 'markdown',
        name: 'markdown',
        component: () => import('../page/markdown/index.vue'),
        meta: {
          title: '文库',
          hideMenu: false
        }
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('../page/my/index.vue'),
        meta: {
          title: '我的',
          hideMenu: false
        }
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('../page/message/index.vue'),
        meta: {
          title: '留言',
          hideMenu: false
        }
      },
      {
        path: 'transform',
        name: 'transform',
        component: () => import('../page/transform/webp/index.vue'),
        meta: {
          title: '转换工具',
          hideMenu: false
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../page/login/index.vue'),
        meta: {
          title: 'login',
          hideMenu: false
        }
      },
      {
        path: 'gollery',
        name: 'gollery',
        component: () => import('../page/gollery/index.vue'),
        meta: {
          title: '图库',
          hideMenu: false
        }
      },

      {
        path: 'article',
        name: 'article',
        component: () => import('../page/article/index.vue'),
        meta: {
          title: '文章',
          hideMenu: false
        }
      },
      {
        path: 'photo',
        name: 'photo',
        component: () => import('../page/photo/index.vue'),
        meta: {
          title: '图片',
          hideMenu: false
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../page/home/index.vue')
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
