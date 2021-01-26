import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteLocationNormalized
} from 'vue-router';

import Layout from '/@/layouts/index.vue';
import store from '/@/store';

type AdminRouteRecordRaw = RouteRecordRaw & {
  // 是否展示在左侧菜单栏
  menu?: boolean;
  meta?: {
    title?: string;
    // element标准的图标类名，使用i标签创建
    iconCLass?: string;
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
    name: 'Index',
    meta: { title: '数据页', iconClass: 'el-icon-s-data' },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: { title: '数据分析', iconCLass: 'el-icon-s-marketing' },
        component: () => import('/@/views/Home/index.vue')
      },
      {
        path: 'oversee',
        name: 'DataOversee',
        meta: { title: '数据监控', iconCLass: 'el-icon-odometer' },
        component: () => import('/@/views/Home/oversee.vue')
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/table/base',
    name: 'Table',
    meta: { title: '表格页', iconCLass: 'el-icon-data-board' },
    children: [
      {
        path: 'base',
        name: 'TableBase',
        meta: { title: '基本表格', iconCLass: 'el-icon-data-board' },
        component: () => import('/@/views/Table/index.vue')
      },
      {
        path: 'server',
        name: 'TableServer',
        meta: { title: '动态数据表格', iconCLass: 'el-icon-data-board' },
        component: () => import('/@/views/Table/server.vue')
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/form/base',
    name: 'Form',
    meta: { title: '表单页', iconCLass: 'el-icon-edit-outline' },
    children: [
      {
        path: 'base',
        name: 'FormBase',
        meta: { title: '基本表单', iconCLass: 'el-icon-edit-outline' },
        component: () => import('/@/views/Form/index.vue')
      },
      {
        path: 'def',
        name: 'FormDef',
        meta: { title: '自定义表单', iconCLass: 'el-icon-edit-outline' },
        component: () => import('/@/views/Form/def.vue')
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
      iconCLass: 'el-icon-warning-outline'
    },
    children: [
      {
        path: '403',
        name: '403',
        meta: { title: '403', iconCLass: 'el-icon-warning-outline' },
        component: () => import('/@/views/Error/403.vue')
      },
      {
        path: '404',
        name: '404',
        meta: { title: '404', iconCLass: 'el-icon-warning-outline' },
        component: () => import('/@/views/Error/404.vue')
      },
      {
        path: '500',
        name: '500',
        meta: { title: '500', iconCLass: 'el-icon-warning-outline' },
        component: () => import('/@/views/Error/500.vue')
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
    path: to.path
  });

  document.title = `${to.meta?.title || ''} - 管理系统`;
  next();
});

export default router;
