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

const userModule: AdminRouteRecordRaw = {
  path: '/user',
  component: Layout,
  name: 'User',
  meta: { title: '用户中心' },
  children: [
    {
      path: '',
      name: 'UserIndex',
      meta: { title: '个人中心' },
      component: () => import('@/views/User')
    },
    {
      path: 'setting',
      name: 'Setting',
      meta: { title: '个人设置' },
      component: () => import('@/views/User/Setting')
    }
  ]
};

// vue-router子路由path不需要添加/
const routes: Array<AdminRouteRecordRaw> = [
  userModule,
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
    path: '/m',
    component: Layout,
    redirect: '/m/m1',
    name: 'Menu0',
    meta: {
      title: '多级菜单',
      iconName: 'QuestionOutlined'
    },
    menu: true,
    children: [
      {
        path: 'm1',
        name: 'Menu1-1',
        meta: { title: '菜单1-1', iconName: 'QuestionCircleOutlined' },
        menu: true,
        component: () => import('@/views/MenuDemo/M1')
      },
      {
        path: 'm2',
        name: 'Menu1-2',
        meta: { title: '菜单1-2', iconName: 'QuestionCircleOutlined' },
        menu: true,
        component: () => import('@/views/MenuDemo/M2'),
        redirect: '/m/m2/m1',
        children: [
          {
            path: 'm1',
            name: 'Menu1-2-1',
            meta: { title: '菜单1-2-1', iconName: 'QuestionCircleOutlined' },
            menu: true,
            component: () => import('@/views/MenuDemo/M2/M2-1')
          },
          {
            path: 'm2',
            menu: true,
            name: 'Menu1-2-2',
            meta: { title: '菜单1-2-2', iconName: 'QuestionCircleOutlined' },
            component: () => import('@/views/MenuDemo/M2/M2-2')
          }
        ]
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
    breadcrumbs: to.matched
      .filter((item) => item.meta?.title)
      .map((item: AdminRouteRecordRaw) => item.meta?.title)
  });

  document.title = `${to.meta?.title || ''} - 管理系统`;
  next();
});

export { AdminRouteRecordRaw, routes };

export default router;
