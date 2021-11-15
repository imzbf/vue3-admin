import { createRouter, createWebHistory, RouteLocation, RouteRecordRaw } from 'vue-router';
import Layout from '@/layouts/index.vue';
const VITE_BASE = import.meta.env.VITE_BASE as string;

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/pages/Dashboard/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: () => import('@/pages/Login/index.vue')
  },
  {
    path: '/404',
    name: 'Global404',
    meta: { title: '页面不见啦.' },
    component: () => import('@/pages/404/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'All',
    redirect: (to: RouteLocation) => {
      return { path: '/404', query: { from: to.path } };
    }
  }
];

const router = createRouter({
  history: createWebHistory(VITE_BASE),
  routes
});

export default router;
