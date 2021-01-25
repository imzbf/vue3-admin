import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteLocationNormalized
} from 'vue-router';

import Layout from '/@/layouts/index.vue';

import store from '/@/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/Login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/login',
    children: [
      {
        path: '/',
        component: () => import('/@/views/Home/index.vue'),
        name: 'DataAnalysis'
      },
      {
        path: '/oversee',
        component: () => import('/@/views/Home/oversee.vue'),
        name: 'DataOversee'
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/login',
    children: [
      {
        path: '/table-base',
        component: () => import('/@/views/Table/index.vue'),
        name: 'TableBase'
      },
      {
        path: '/table-server',
        component: () => import('/@/views/Table/server.vue'),
        name: 'TableServer'
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/login',
    children: [
      {
        path: '/form-base',
        component: () => import('/@/views/Form/index.vue'),
        name: 'FormBase'
      },
      {
        path: '/form-def',
        component: () => import('/@/views/Form/def.vue'),
        name: 'FormDef'
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/login',
    children: [
      {
        path: '/403',
        component: () => import('/@/views/Error/403.vue'),
        name: '403'
      },
      {
        path: '/404',
        component: () => import('/@/views/Error/404.vue'),
        name: '404'
      },
      {
        path: '/500',
        component: () => import('/@/views/Error/500.vue'),
        name: '500'
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/login',
    children: [
      {
        path: '/',
        component: () => import('/@/views/Home/index.vue'),
        name: 'DataAnalysis'
      },
      {
        path: '/oversee',
        component: () => import('/@/views/Home/oversee.vue'),
        name: 'DataOversee'
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((route: RouteLocationNormalized) => {
  store.commit('setting/routeChanged', {
    path: route.path
  });
});

export default router;
