interface AsideType {
  aside: 'open' | 'close' | 'none'; // 正常展开、缩小显示图标、不展示
}

export type Themes = 'dark' | 'light' | 'deepDark';

export interface SettingStateType extends AsideType {
  // 当前菜单
  activeMenu: string;
  // 面包屑
  breadcrumbs: Array<string>;
  // 主题
  theme?: Themes;
}

const themeKey = 'theme';

const cacheTheme = localStorage.getItem(themeKey);

const state: SettingStateType = {
  aside: 'open',
  activeMenu: '/',
  breadcrumbs: [],
  theme:
    (cacheTheme === 'dark' && 'dark') ||
    (cacheTheme === 'light' && 'light') ||
    (cacheTheme === 'deepDark' && 'dark') ||
    'dark'
};

const mutations = {
  asideState(state: SettingStateType, payload: AsideType): void {
    state.aside = payload.aside;
  },
  routeChanged(
    state: SettingStateType,
    payload: { path: string; breadcrumbs: Array<string> }
  ): void {
    state.activeMenu = payload.path;
    state.breadcrumbs = payload.breadcrumbs;
  },
  // 切换主题
  themeChanged(state: SettingStateType, payload: { theme: Themes }): void {
    state.theme = payload.theme;
    localStorage.setItem(themeKey, payload.theme);
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
