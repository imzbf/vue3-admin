interface AsideType {
  aside: 'open' | 'close' | 'none'; // 正常展开、缩小显示图标、不展示
}

export interface SettingStateType extends AsideType {
  activeMenu: string;
}

const state: SettingStateType = {
  aside: 'open',
  activeMenu: '/'
};
const mutations = {
  asideState(state: SettingStateType, payload: AsideType): void {
    state.aside = payload.aside;
  },
  routeChanged(state: SettingStateType, payload: { path: string }): void {
    state.activeMenu = payload.path;
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
