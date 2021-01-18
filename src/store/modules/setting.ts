interface AsideType {
  aside: 'open' | 'close' | 'none'; // 正常展开、缩小显示图标、不展示
}

export type SettingStateType = AsideType;

const state: SettingStateType = {
  aside: 'open'
};
const mutations = {
  asideState(state: SettingStateType, payload: AsideType): void {
    state.aside = payload.aside;
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
