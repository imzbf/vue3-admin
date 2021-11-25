import { RouteRecordName } from 'vue-router';
import Final from '@/config/keys';
import router, { routes, AdminRouteRecordRaw } from '@/router';

import DynamicRoutes, { ViewList } from '../router/dynamic';

export const getToken = () => localStorage.getItem(Final.TOKEN) || '';

/**
 * 将后端菜单数据结构转换为vue-router的结构
 *
 * @param menus 菜单列表
 * @returns vue-router配置列表
 */
export const transformRoutes = (menus: Array<any>) => {
  return menus.map((menu) => {
    // 转换组件
    if (menu.component) {
      menu.component = DynamicRoutes[menu.component as keyof ViewList];
    }

    // 转换子组件
    if (menu.children && menu.children instanceof Array) {
      menu.children = transformRoutes(menu.children);
    }

    return menu;
  });
};

/**
 * 重置路由
 *
 * @param newRoutes 待添加的路由列表
 */
export const resetRoutes = (newRoutes: AdminRouteRecordRaw[] = []) => {
  // 以路由名称为主，删除已知路由，再添加新的路由
  const routeNames = router.getRoutes().map((route) => route.name);

  routeNames.forEach(
    (name: RouteRecordName | undefined) => name && router.removeRoute(name)
  );

  // 挨个添加新的路由
  newRoutes.concat(routes).forEach((route: AdminRouteRecordRaw) => {
    router.addRoute(route);
  });
};
