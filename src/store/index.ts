import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

import setting, { SettingStateType } from './modules/setting';

export interface StateType {
  setting: SettingStateType;
}

export const key: InjectionKey<Store<StateType>> = Symbol();

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    setting
  }
});
