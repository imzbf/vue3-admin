import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

import setting, { SettingStateType } from './modules/setting';
import menu, { MenuStateType } from './modules/menu';
import user, { UserStateType } from './modules/user';

// store的key
export const key: InjectionKey<Store<StateType>> = Symbol();

export interface StateType {
  setting: SettingStateType;
  menu: MenuStateType;
  user: UserStateType;
}

const store = (() => {
  const store = createStore({
    getters: {
      token: (state: StateType) => state.user.token
    },
    mutations: {},
    actions: {},
    modules: {
      setting,
      menu,
      user
    }
  });
  // 处理热更新时需要刷新页面，vuex才能继续使用
  if (import.meta.env.DEV) {
    import.meta.hot.accept(
      ['./modules/menu', './modules/setting', './modules/user'],
      ([resMenu, resSetting, resUser]: any[]) => {
        store.hotUpdate({
          getters: {
            token: (state: StateType) => state.user.token
          },
          mutations: {},
          actions: {},
          modules: {
            setting: resSetting,
            menu: resMenu,
            user: resUser
          }
        });
      }
    );
  }
  return store;
})();

export default store;
