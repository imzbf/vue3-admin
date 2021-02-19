import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw
} from 'vue-router';
import NProgress from 'nprogress';
import Icon from '@ant-design/icons-vue/lib/icons';

import Layout from '@/layouts';
import store from '@/store';

import userModule from './modules/user';
import tableModule from './modules/table';
import errorModule from './modules/error';
import demoModule from './modules/demo';

NProgress.configure({ minimum: 0.1 });

interface OverrideRecordRaw {
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
  children?: Array<RouteRecordRaw & OverrideRecordRaw>;
  [propName: string]: any;
}

type AdminRouteRecordRaw = RouteRecordRaw & OverrideRecordRaw;

// vue-router子路由path不需要添加/关键词
const routes: Array<AdminRouteRecordRaw> = [
  demoModule,
  userModule,
  tableModule,
  errorModule,
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: 'Index',
    menu: true,
    children: [
      {
        path: 'index',
        name: 'IndexPage',
        component: () => import('@/views'),
        menu: true,
        meta: { title: '工作台', iconName: 'CodeOutlined' }
      }
    ]
  },
  {
    path: '/data',
    component: Layout,
    redirect: '/data/chart',
    name: 'Data',
    meta: { title: '数据分析', iconName: 'SlidersFilled' },
    menu: true,
    children: [
      {
        path: 'chart',
        name: 'Chart',
        meta: { title: '图形数据', iconName: 'BarChartOutlined' },
        menu: true,
        component: () => import('@/views/Data')
      },
      {
        path: 'card',
        name: 'Card',
        meta: { title: '模块数据', iconName: 'RobotOutlined' },
        menu: true,
        component: () => import('@/views/Data/Oversee')
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
    path: '/outlink',
    name: 'Github',
    meta: { title: '外部链接', iconName: 'GithubFilled' },
    menu: true,
    outLink: 'https://github.com/zhoubangfu/vue3-admin',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to: RouteLocationNormalized, _, next) => {
  NProgress.start();
  store.commit('setting/routeChanged', {
    path: to.path,
    breadcrumbs: to.matched
      .filter((item) => item.meta?.title)
      .map((item: AdminRouteRecordRaw) => item.meta?.title)
  });

  document.title = `${to.meta?.title || ''} - 管理系统`;
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export { AdminRouteRecordRaw, routes };

export default router;
