import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteLocationNormalized
} from 'vue-router';

import Layout from '/@/layouts/index.vue';

import store from '/@/store';

// vue-router子路由path不需要添加/
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: () => import('/@/views/Login/index.vue')
  },
  {
    path: '',
    redirect: '/index/dashboard'
  },
  {
    path: '/index',
    component: Layout,
    redirect: '/index/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: { title: '数据分析' },
        component: () => import('/@/views/Home/index.vue')
      },
      {
        path: 'oversee',
        name: 'DataOversee',
        meta: { title: '数据监控' },
        component: () => import('/@/views/Home/oversee.vue')
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/table/base',
    children: [
      {
        path: 'base',
        name: 'TableBase',
        meta: { title: '数据监控' },
        component: () => import('/@/views/Table/index.vue')
      },
      {
        path: 'server',
        name: 'TableServer',
        meta: { title: '数据监控' },
        component: () => import('/@/views/Table/server.vue')
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/form/base',
    children: [
      {
        path: 'base',
        name: 'FormBase',
        meta: { title: '数据监控' },
        component: () => import('/@/views/Form/index.vue')
      },
      {
        path: 'def',
        name: 'FormDef',
        meta: { title: '数据监控' },
        component: () => import('/@/views/Form/def.vue')
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: '/error/404',
    children: [
      {
        path: '403',
        name: '403',
        meta: { title: '数据监控' },
        component: () => import('/@/views/Error/403.vue')
      },
      {
        path: '404',
        name: '404',
        meta: { title: '数据监控' },
        component: () => import('/@/views/Error/404.vue')
      },
      {
        path: '500',
        name: '500',
        meta: { title: '数据监控' },
        component: () => import('/@/views/Error/500.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to: RouteLocationNormalized, from, next) => {
  store.commit('setting/routeChanged', {
    path: to.path
  });

  document.title = to.meta?.title;

  console.log(to);

  next();
});

export default router;
