import setting from '@/setting';

interface AsideType {
  aside: 'open' | 'close' | 'none'; // 正常展开、缩小显示图标、不展示
}

export type Themes = 'dark' | 'light' | 'deepDark';

export interface SettingStateType extends AsideType {
  // 当前激活的菜单
  selectedKeys: Array<string>;
  // 当前展开菜单key
  openKeys: Array<string | number>;
  // 面包屑
  breadcrumbs: Array<string>;
  // 主题
  theme?: Themes;
}

const themeKey = 'theme';

const cacheTheme = localStorage.getItem(themeKey);

const state: SettingStateType = {
  aside: 'open',
  selectedKeys: ['/'],
  openKeys: setting.openKeys,
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
    // ['index','data']
    const levels = payload.path.match(/[^/]+/g) || [];
    // 删除最后一个Item，展开其他的所有父级菜单
    levels.pop();

    const openKeysTemp: string[] = setting.openKeys;

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
