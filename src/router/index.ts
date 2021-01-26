import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteLocationNormalized
} from 'vue-router';

import Layout from '@/layouts/index.vue';
import store from '@/store';

type AdminRouteRecordRaw = RouteRecordRaw & {
  // 是否展示在左侧菜单栏
  menu?: boolean;
  meta?: {
    title?: string;
    // element标准的图标类名，使用i标签创建
    iconClass?: string;
    // 阿里矢量图标js标准，使用svg创建，以#开头
    iconHref?: string;
    [propName: string]: any;
  };
  children?: Array<AdminRouteRecordRaw>;
  [propName: string]: any;
};

// vue-router子路由path不需要添加/
const routes: Array<AdminRouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/',
    redirect: '/index/dashboard'
  },
  {
    path: '/index',
    component: Layout,
    redirect: '/index/dashboard',
    name: 'Index',
    meta: { title: '数据页', iconClass: 'el-icon-s-data' },
    menu: true,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: { title: '数据分析', iconClass: 'el-icon-s-marketing' },
        menu: true,
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: 'oversee',
        name: 'DataOversee',
        meta: { title: '数据监控', iconClass: 'el-icon-odometer' },
        menu: true,
        component: () => import('@/views/Home/oversee.vue')
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/table/base',
    name: 'Table',
    meta: { title: '表格页', iconClass: 'el-icon-data-board' },
    menu: true,
    children: [
      {
        path: 'base',
        name: 'TableBase',
        meta: { title: '基本表格', iconClass: 'el-icon-data-board' },
        menu: true,
        component: () => import('@/views/Table/index.vue')
      },
      {
        path: 'server',
        name: 'TableServer',
        meta: { title: '动态数据表格', iconClass: 'el-icon-data-board' },
        menu: true,
        component: () => import('@/views/Table/server.vue')
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/form/base',
    name: 'Form',
    meta: { title: '表单页', iconClass: 'el-icon-edit-outline' },
    menu: true,
    children: [
      {
        path: 'base',
        name: 'FormBase',
        meta: { title: '基本表单', iconClass: 'el-icon-edit-outline' },
        menu: true,
        component: () => import('@/views/Form/index.vue')
      },
      {
        path: 'def',
        name: 'FormDef',
        meta: { title: '自定义表单', iconClass: 'el-icon-edit-outline' },
        menu: true,
        component: () => import('@/views/Form/def.vue')
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: '/error/404',
    name: 'Error',
    meta: {
      title: '异常页',
      iconClass: 'el-icon-warning-outline'
    },
    menu: true,
    children: [
      {
        path: '403',
        name: '403',
        meta: { title: '403', iconClass: 'el-icon-warning-outline' },
        menu: true,
        component: () => import('@/views/Error/403.vue')
      },
      {
        path: '404',
        name: '404',
        meta: { title: '404', iconClass: 'el-icon-warning-outline' },
        menu: true,
        component: () => import('@/views/Error/404.vue')
      },
      {
        path: '500',
        name: '500',
        meta: { title: '500', iconClass: 'el-icon-warning-outline' },
        menu: true,
        component: () => import('@/views/Error/500.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to: RouteLocationNormalized, _, next) => {
  store.commit('setting/routeChanged', {
    path: to.path,
    breadcrumbs: to.matched.map((item: AdminRouteRecordRaw) => item.meta?.title)
  });

  document.title = `${to.meta?.title || ''} - 管理系统`;
  next();
});

export { AdminRouteRecordRaw, routes };
export default router;
