import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteLocationNormalized
} from 'vue-router';
import Icon from '@ant-design/icons-vue/lib/icons';

import Layout from '@/layouts';
import store from '@/store';

type AdminRouteRecordRaw = RouteRecordRaw & {
  // 是否展示在左侧菜单栏
  menu?: boolean;
  outLink?: string;
  meta?: {
    title?: string;
    // ant-design-vue使用的标准Icon组件名称
    iconName?: keyof typeof Icon;
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
    component: () => import('@/views/Login')
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
    meta: { title: '数据页', iconName: 'LaptopOutlined' },
    menu: true,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: { title: '数据分析', iconName: 'ProjectOutlined' },
        menu: true,
        component: () => import('@/views/Home')
      },
      {
        path: 'oversee',
        name: 'DataOversee',
        meta: { title: '数据监控', iconName: 'RobotOutlined' },
        menu: true,
        component: () => import('@/views/Home/Oversee')
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/table/base',
    name: 'Table',
    meta: { title: '表格页', iconName: 'TableOutlined' },
    menu: true,
    children: [
      {
        path: 'base',
        name: 'TableBase',
        meta: { title: '基本表格', iconName: 'TableOutlined' },
        menu: true,
        component: () => import('@/views/Table')
      },
      {
        path: 'server',
        name: 'TableServer',
        meta: { title: '动态数据表格', iconName: 'TabletOutlined' },
        menu: true,
        component: () => import('@/views/Table/Server')
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/form/base',
    name: 'Form',
    meta: { title: '表单页', iconName: 'FormOutlined' },
    menu: true,
    children: [
      {
        path: 'base',
        name: 'FormBase',
        meta: { title: '基本表单', iconName: 'EditOutlined' },
        menu: true,
        component: () => import('@/views/Form')
      },
      {
        path: 'def',
        name: 'FormDef',
        meta: { title: '自定义表单', iconName: 'DiffOutlined' },
        menu: true,
        component: () => import('@/views/Form/Def')
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
      iconName: 'QuestionOutlined'
    },
    menu: true,
    children: [
      {
        path: '403',
        name: '403',
        meta: { title: '403', iconName: 'QuestionCircleOutlined' },
        menu: true,
        component: () => import('@/views/Error/403')
      },
      {
        path: '404',
        name: '404',
        meta: { title: '404', iconName: 'QuestionCircleOutlined' },
        menu: true,
        component: () => import('@/views/Error/404')
      },
      {
        path: '500',
        name: '500',
        meta: { title: '500', iconName: 'QuestionCircleOutlined' },
        menu: true,
        component: () => import('@/views/Error/500')
      }
    ]
  },
  {
    path: '/outlink',
    name: 'Github',
    meta: { title: '外部链接', iconName: 'GithubFilled' },
    menu: true,
    outLink: 'https://github.com/zhoubangfu/vue3-admin',
    redirect: '/'
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
