import setting from '@/config/setting';
import Final from '@/config/keys';
import darkVars from '@/config/dark.json';
import lightVars from '@/config/light.json';
interface AsideType {
  aside: 'open' | 'close' | 'none'; // 正常展开、缩小显示图标、不展示
}

export type Themes = 'dark' | 'light' | 'mix';

export interface SettingStateType extends AsideType {
  // 当前激活的菜单
  selectedKeys: Array<string>;
  // 当前展开菜单key
  openKeys: Array<string | number>;
  // 面包屑
  breadcrumbs: Array<string>;
  // 主题
  theme: Themes;
  // 缓存路由名称列表
  cacheList: Array<string>;
}

const lessHandler = (themeName: Themes) => {
  switch (themeName) {
    case 'dark': {
      (window as any).less.modifyVars(darkVars);
      break;
    }
    case 'light': {
      (window as any).less.modifyVars(lightVars);
      break;
    }
    case 'mix': {
      (window as any).less.modifyVars(lightVars);
    }
  }
};

const cacheTheme = localStorage.getItem(Final.THEME);

const state: SettingStateType = {
  aside: 'open',
  selectedKeys: ['/'],
  openKeys: setting.openKeys,
  breadcrumbs: [],
  theme:
    (cacheTheme === 'dark' && 'dark') ||
    (cacheTheme === 'light' && 'light') ||
    (cacheTheme === 'mix' && 'mix') ||
    'dark',
  cacheList: []
};

lessHandler(state.theme);

// 获取路由列表中需要缓存的组件名称
const getCacheComponentName = (routes: Array<any>): Array<string> => {
  const list: Set<any> = new Set();

  const innerLoop = (routesRow: Array<any>) => {
    routesRow.forEach((route) => {
      if (route.meta && route.meta.keepAlive && route.meta.cname) {
        list.add(route.meta.cname);
      }

      // 判断是否存在子组件
      if (route.children && route.children.length > 0) {
        innerLoop(route.children);
      }
    });
  };

  innerLoop(routes);
  return Array.from(list);
};

const mutations = {
  asideState(state: SettingStateType, payload: AsideType): void {
    state.aside = payload.aside;
  },
  routeChanged(
    state: SettingStateType,
    payload: { path: string; breadcrumbs: Array<string> }
  ): void {
    // ['index','data']
    const levels = payload.path.match(/[^/]+/g) || [];

    // 删除最后一个Item，展开其他的所有父级菜单
    levels.pop();

    const openKeysTemp: string[] = setting.openKeys;

    // 解决一级路由不能正确展开菜单
    if (levels.length === 0) {
      levels.push('');
    }
    levels.reduce((prev: string, curr): string => {
      openKeysTemp.push(prev + '/' + curr);
      return prev + '/' + curr;
    }, '');

    state.selectedKeys = [payload.path];
    state.openKeys = openKeysTemp;
    state.breadcrumbs = payload.breadcrumbs;
  },
  // 切换主题
  themeChanged(state: SettingStateType, payload: { theme: Themes }): void {
    state.theme = payload.theme;
    localStorage.setItem(Final.THEME, payload.theme);
    lessHandler(payload.theme);
  },
  // 生成新的缓存名单
  setCacheList(state: SettingStateType, payload: { routes: Array<any> }): void {
    state.cacheList = [...state.cacheList, ...getCacheComponentName(payload.routes)];
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
