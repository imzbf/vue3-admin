import { routes, AdminRouteRecordRaw } from '@/router';
import Icon from '@ant-design/icons-vue/lib/icons';
export interface MenuType {
  menuName: string;
  path: string;
  iconName?: keyof typeof Icon;
  iconHref?: string;
  children: Array<MenuType>;
}

export interface MenuStateType {
  menuList: Array<MenuType>;
}

const transformMenu = (): Array<MenuType> => {
  const menuList: Array<MenuType> = [];

  const innerLoop = (_routes: Array<AdminRouteRecordRaw>, parent: MenuType): void => {
    _routes.forEach((item: AdminRouteRecordRaw) => {
      // 设置了menu为true才显示
      if (item.menu) {
        const menu: MenuType = {
          menuName: item.meta?.title || '',
          path: `${parent.path}/${item.path.replace(/^\//, '')}`,
          iconName: item.meta?.iconName,
          iconHref: item.meta?.iconHref,
          children: []
        };

        if (item.children && item.children.length > 0) {
          innerLoop(item.children, menu);
        }

        parent.children.push(menu);
      }
    });
  };

  innerLoop(routes, { children: menuList, path: '', menuName: '' });

  return menuList;
};

const state: MenuStateType = {
  menuList: []
};
const mutations = {
  routeChanged(state: MenuStateType): void {
    state.menuList = transformMenu();
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
