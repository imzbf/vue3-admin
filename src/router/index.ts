import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '/@/layouts/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/Login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '',
        component: () => import('/@/views/Home/index.vue'),
        name: 'Home'
      },
      {
        path: 'about',
        component: () => import('/@/views/About/index.vue'),
        name: 'About'
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
