import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

import setting, { SettingStateType } from './modules/setting';
import menu, { MenuStateType } from './modules/menu';
import user, { UserStateType } from './modules/user';
import baseTable, { BaseTableType } from './modules/table';
export interface StateType {
  setting: SettingStateType;
  menu: MenuStateType;
  user: UserStateType;
  baseTable: BaseTableType;
}

export const key: InjectionKey<Store<StateType>> = Symbol();

export default createStore({
  getters: {
    token: (state: StateType) => state.user.token
  },
  mutations: {},
  actions: {},
  modules: {
    setting,
    menu,
    user,
    baseTable
  }
});
