import { routes, AdminRouteRecordRaw } from '@/router';
import Icon from '@element-plus/icons-vue';

export interface MenuType {
  title: string;
  path: string;
  children: Array<MenuType>;
  outLink?: string;
  iconName?: keyof typeof Icon;
  iconHref?: string;
}

export interface MenuStateType {
  menuList: Array<MenuType>;
}

const transformMenu = (routes: Array<AdminRouteRecordRaw>): Array<MenuType> => {
  const menuList: Array<MenuType> = [];

  const innerLoop = (_routes: Array<AdminRouteRecordRaw>, parent: MenuType): void => {
    _routes.forEach((item: AdminRouteRecordRaw) => {
      // 设置了menu为true才显示
      if (item.menu) {
        const menu: MenuType = {
          title: item.meta?.title || '',
          path: `${parent.path.replace(/\/$/, '')}/${item.path.replace(/^\//, '')}`,
          iconName: item.meta?.iconName,
          iconHref: item.meta?.iconHref,
          children: [],
          outLink: item.outLink
        };

        if (item.children && item.children.length > 0) {
          innerLoop(item.children, menu);
        }

        parent.children.push(menu);
      }
    });
  };

  innerLoop(routes, { children: menuList, path: '', title: '' });

  return menuList;
};

const state: MenuStateType = {
  menuList: []
};
const mutations = {
  resetMenu(state: MenuStateType, payload: { newRoutes: Array<AdminRouteRecordRaw> }): void {
    state.menuList = transformMenu(routes.concat(payload.newRoutes));
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
