import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

import setting, { SettingStateType } from './modules/setting';
import menu, { MenuStateType } from './modules/menu';

export interface StateType {
  setting: SettingStateType;
  menu: MenuStateType;
}

export const key: InjectionKey<Store<StateType>> = Symbol();

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    setting,
    menu
  }
});
