import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  NavigationGuardNext,
  RouteRecordRaw,
  RouteLocation
} from 'vue-router';
import NProgress from 'nprogress';
import Icon from '@ant-design/icons-vue/lib/icons';

import store from '@/store';
import { getToken } from '@/utils/biz';

import DynamicRoutes from './dynamic';
// import errorModule from './modules/error';
// import tableModule from './modules/table';

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
  // 所需角色列表
  roles?: Array<number | string>;
  [propName: string]: any;
}

type AdminRouteRecordRaw = RouteRecordRaw & OverrideRecordRaw;

const VITE_BASE = import.meta.env.VITE_BASE;

// vue-router子路由path不需要添加/关键词
const routes: Array<AdminRouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: DynamicRoutes.login
  },
  // {
  //   path: '/',
  //   component: DynamicRoutes.layout,
  //   redirect: '/index',
  //   name: 'Index',
  //   menu: true,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'IndexPage',
  //       component: DynamicRoutes.dashboard,
  //       menu: true,
  //       meta: { title: '工作台', iconName: 'CodeOutlined' }
  //     }
  //   ]
  // },
  // {
  //   path: '/data',
  //   component: DynamicRoutes.layout,
  //   redirect: '/data/chart',
  //   name: 'Data',
  //   meta: { title: '数据分析', iconName: 'SlidersFilled' },
  //   menu: true,
  //   children: [
  //     {
  //       path: 'chart',
  //       name: 'Chart',
  //       meta: { title: '图形数据', iconName: 'BarChartOutlined' },
  //       menu: true,
  //       component: DynamicRoutes.chart_data
  //     },
  //     {
  //       path: 'card',
  //       name: 'Card',
  //       meta: { title: '模块数据', iconName: 'RobotOutlined' },
  //       menu: true,
  //       component: DynamicRoutes.card_data
  //     }
  //   ]
  // },
  // {
  //   path: '/form',
  //   component: DynamicRoutes.layout,
  //   redirect: '/form/base',
  //   name: 'Form',
  //   meta: { title: '表单页', iconName: 'FormOutlined' },
  //   menu: true,
  //   children: [
  //     {
  //       path: 'base',
  //       name: 'FormBase',
  //       meta: { title: '基本表单', iconName: 'EditOutlined' },
  //       menu: true,
  //       component: DynamicRoutes.base_form
  //     },
  //     {
  //       path: 'def',
  //       name: 'FormDef',
  //       meta: { title: '自定义表单', iconName: 'DiffOutlined' },
  //       menu: true,
  //       component: DynamicRoutes.def_form
  //     }
  //   ]
  // },
  // demoModule,
  // userModule,
  // tableModule,
  // ...errorModule,
  // {
  //   path: '/outlink',
  //   name: 'Github',
  //   meta: { title: '外部链接', iconName: 'GithubFilled' },
  //   menu: true,
  //   outLink: 'https://github.com/zhoubangfu/vue3-admin',
  //   redirect: '/'
  // },
  {
    path: '/404',
    name: 'Global404',
    meta: { title: '页面不见啦.' },
    component: DynamicRoutes.error_404
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

router.beforeEach(async (to: RouteLocationNormalized, _, next: NavigationGuardNext) => {
  NProgress.start();

  const token = getToken();

  // 返回之前页面如有额外query参数可自行携带
  // 例如：
  // const { query } = to;
  // delete query.from;
  // next(`/?${Object.entries(query).join('&').replace(/,/g, '=')}`);

  if (token) {
    // 检测是否有用户信息
    // if (!store.state.user.info?.username) {
    //   // 获取用户信息
    //   await store.dispatch('user/getLoginUser');
    // }

    // 有token时，前往登录页
    if (new RegExp(`^${VITE_BASE}/login.*`).test(to.path)) {
      if (to.query.from) {
        // 存在登录跳转回页面
        next(to.query.from as string);
      } else {
        next(VITE_BASE);
      }
    } else {
      store.commit('setting/routeChanged', {
        path: to.path,
        breadcrumbs: to.matched
          .filter((item) => item.meta?.title)
          .map((item: AdminRouteRecordRaw) => item.meta?.title)
      });

      document.title = `${to.meta?.title || ''} - 管理系统`;
      next();
    }
  } else {
    // 没有token

    // 判断是否是登录页，防止死循环
    if (new RegExp(`^${VITE_BASE}/login.*`).test(to.path)) {
      next();
    } else if (new RegExp(`^${VITE_BASE}/404`).test(to.path)) {
      const from = to.query.from;
      next(from ? `${VITE_BASE}/login?from=${from}` : `${VITE_BASE}/login`);
    } else {
      next(`${VITE_BASE}/login?from=${to.path}`);
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});

export { AdminRouteRecordRaw, routes };

export default router;
