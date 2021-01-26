interface AsideType {
  aside: 'open' | 'close' | 'none'; // 正常展开、缩小显示图标、不展示
}

export interface SettingStateType extends AsideType {
  activeMenu: string;
  breadcrumbs: Array<string>;
}

const state: SettingStateType = {
  aside: 'open',
  activeMenu: '/',
  breadcrumbs: []
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
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
