import setting, { fixedTags } from '@/config/setting';
import Final from '@/config/keys';
import router from '@/router';
import { menuTagActions } from '@/config/static';

interface AsideType {
  aside: 'open' | 'close'; // 正常展开、缩小显示图标
  isMobile: boolean;
  mobileDrawer: boolean;
}

export type Themes = 'dark' | 'light';

export interface MenuTag {
  title: string;
  path: string;
  // 是否是当前路由
  curr: boolean;
}

// 移除标签类型，当前|目标|非当前|全部
export type MenuTagActions = 'rmCurr' | 'rmTarget' | 'rmOther' | 'rmAll';

export interface SettingStateType extends AsideType {
  // 当前激活的菜单
  selectedKey: string;
  // 当前展开菜单key
  openKeys: Array<string>;
  // 面包屑
  breadcrumbs: Array<string>;
  // 主题
  theme: Themes;
  // 缓存路由名称列表
  cacheList: Array<string>;
  // 当前打开的菜单标签
  menuTags: Array<MenuTag>;
  // 设置抽屉状态
  settingDrawerVisible: boolean;
}

const cacheTheme = localStorage.getItem(Final.THEME);

const adjustHtmlClass = (theme: Themes) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

adjustHtmlClass(cacheTheme as Themes);

const defaultState: SettingStateType = {
  aside: 'open',
  mobileDrawer: false,
  selectedKey: '/',
  openKeys: setting.openKeys,
  breadcrumbs: [],
  theme: (cacheTheme === 'dark' && 'dark') || (cacheTheme === 'light' && 'light') || 'light',
  cacheList: [],
  menuTags: fixedTags.map((tag) => ({ curr: false, ...tag })),
  isMobile: document.body.offsetWidth < 970,
  settingDrawerVisible: false
};

// 判断当前操作标签是不是固定标签
const checkFixedTag = (tag: MenuTag) => {
  return fixedTags.findIndex((item) => item.path === tag.path) !== -1;
};

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
  adjustMobileDrawer(state: SettingStateType, payload: AsideType): void {
    state.mobileDrawer = payload.mobileDrawer;
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

    state.selectedKey = payload.path;
    state.openKeys = openKeysTemp;
    state.breadcrumbs = payload.breadcrumbs;
  },
  // 切换主题
  themeChanged(state: SettingStateType, payload: { theme: Themes }): void {
    adjustHtmlClass(payload.theme);
    state.theme = payload.theme;
    localStorage.setItem(Final.THEME, payload.theme);
  },
  // 生成新的缓存名单
  setCacheList(state: SettingStateType, payload: { routes: Array<any> }): void {
    state.cacheList = [...state.cacheList, ...getCacheComponentName(payload.routes)];
  },
  // 标签栏调整，不存在则新增，存在则更新状态
  routerChanged(state: SettingStateType, payload: { route: MenuTag }) {
    const { menuTags } = state;
    const savedTag = menuTags.find((item) => item.path === payload.route.path);

    if (savedTag) {
      menuTags.forEach((item) => {
        if (item === savedTag) {
          item.curr = true;
        } else {
          item.curr = false;
        }
      });
    } else {
      menuTags.forEach((item) => {
        item.curr = false;
      });

      menuTags.push({
        ...payload.route,
        curr: true
      });
    }

    state.menuTags = menuTags;
  },
  // 标签栏移除
  removeMenuTag(state: SettingStateType, payload: { type: MenuTagActions; route: MenuTag }) {
    switch (payload.type) {
      case menuTagActions.rmTarget: {
        state.menuTags = state.menuTags.filter((tag) => tag.path !== payload.route.path);
        break;
      }
      case menuTagActions.rmCurr: {
        state.menuTags = state.menuTags.filter((tag) => {
          if (tag.curr && !checkFixedTag(tag)) {
            return false;
          }
          return true;
        });
        break;
      }
      case menuTagActions.rmOther: {
        state.menuTags = state.menuTags.filter((tag) => {
          if (!tag.curr && !checkFixedTag(tag)) {
            return false;
          }
          return true;
        });
        break;
      }
      case menuTagActions.rmAll: {
        state.menuTags = fixedTags.map((tag) => ({ curr: false, ...tag }));
      }
    }

    // 定位到最后一个标签
    router.push(state.menuTags[state.menuTags.length - 1].path);
  },
  reSized(state: SettingStateType, payload: { isMobile: boolean }) {
    state.isMobile = payload.isMobile;
  },
  // 调整设置抽屉显示状态
  settingDrawerVisibleChanged(state: SettingStateType) {
    state.settingDrawerVisible = !state.settingDrawerVisible;
  }
};
const actions = {};

export default {
  namespaced: true,
  state: defaultState,
  mutations,
  actions
};
