import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  NavigationGuardNext,
  RouteRecordRaw,
  RouteLocation
} from 'vue-router';
import NProgress from 'nprogress';
import excludeTag from './tagExclude';

import store from '@/store';

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

const VITE_BASE = import.meta.env.VITE_BASE as string;

// vue-router子路由path不需要添加/关键词
const routes: Array<AdminRouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: DynamicRoutes.Login
  },
  {
    path: '/user',
    component: DynamicRoutes.Layout,
    name: 'User',
    meta: { title: '用户中心' },
    redirect: '/user/index',
    children: [
      {
        path: 'index',
        name: 'UserIndex',
        meta: { title: '个人中心', cname: 'UserCenter' },
        component: DynamicRoutes.UserCenter
      },
      {
        path: 'setting',
        name: 'Setting',
        meta: { title: '个人设置', cname: 'UserSetting' },
        component: DynamicRoutes.UserSetting,
        redirect: '/user/setting/account',
        children: [
          {
            path: 'account',
            name: 'UserSettingAccount',
            meta: { title: '资料设置' },
            component: () => import('@/pages/User/Setting/Account/index.vue')
          },
          {
            path: 'security',
            name: 'UserSettingSecurity',
            meta: { title: '安全设置' },
            component: () => import('@/pages/User/Setting/Security/index.vue')
          },
          {
            path: 'binding',
            name: 'UserSettingBinding',
            meta: { title: '账号绑定' },
            component: () => import('@/pages/User/Setting/Binding/index.vue')
          },
          {
            path: 'message',
            name: 'UserSettingMessage',
            meta: { title: '消息通知' },
            component: () => import('@/pages/User/Setting/Message/index.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/404',
    name: 'Global404',
    meta: { title: '页面不见啦.' },
    component: DynamicRoutes.Error404
  },
  {
    path: '/redirect',
    name: 'Redirect',
    meta: { title: '...' },
    component: DynamicRoutes.Layout,
    children: [
      {
        path: ':path*',
        component: DynamicRoutes.Redirect
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'All',
    redirect: (to: RouteLocation) => {
      return { path: '/404', query: { redirect: to.path } };
    }
  }
];

const router = createRouter({
  history: createWebHistory(VITE_BASE),
  routes
});

router.beforeEach(async (to: RouteLocationNormalized, _, next: NavigationGuardNext) => {
  NProgress.start();
  document.title = `${to.meta?.title || ''} - 管理系统`;

  const token = store.state.user.token;
  // 返回之前页面如有额外query参数可自行携带
  // 例如：
  // const { query } = to;
  // delete query.redirect;
  // next(`/?${Object.entries(query).join('&').replace(/,/g, '=')}`);

  if (token) {
    // 检测是否有用户信息
    // if (!store.state.user.info?.username) {
    //   // 获取用户信息
    //   await store.dispatch('user/getLoginUser');
    // }

    // 有token时，前往登录页
    if (/^\/login.*/.test(to.path)) {
      if (to.query.redirect) {
        // 存在登录跳转回页面
        next(to.query.redirect as string);
      } else {
        next('/');
      }
    } else {
      store.commit('setting/routeChanged', {
        path: to.path,
        breadcrumbs: to.matched
          .filter((item) => item.meta?.title)
          .map((item: AdminRouteRecordRaw) => item.meta?.title)
      });

      next();
    }
  } else {
    // 没有token

    // 判断是否是登录页，防止死循环
    if (/^\/login.*/.test(to.path)) {
      next();
    } else if (/^\/404/.test(to.path)) {
      const redirect = to.query.redirect;
      next(redirect ? `/login?redirect=${redirect}` : `/login`);
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});

router.afterEach((to) => {
  // 在这里排除不想要放到标签中的路由
  if (!excludeTag(to.path)) {
    store.commit('setting/routerChanged', {
      route: {
        title: to.meta.title,
        path: to.path
      }
    });
  }

  NProgress.done();
});

export { AdminRouteRecordRaw, routes };

export default router;
