import { logout, login, getUseInfo, LoginInfoType } from '@/apis/user';
import Final from '@/config/keys';
import router from '@/router';
import { transformRoutes, resetRoutes } from '@/utils/biz';

export interface UserStateType {
  info?: {
    username: string;
    avatar: string;
  };
  token?: string;
}

const initInfo = {
  username: '',
  avatar: ''
};

const state: UserStateType = {
  info: initInfo,
  token: localStorage.getItem(Final.TOKEN) || ''
};

const mutations = {
  setToken(state: UserStateType, payload: { token: string }) {
    state.token = payload.token;
  },
  reset(state: UserStateType): void {
    state.token = '';
    state.info = initInfo;
    localStorage.removeItem(Final.TOKEN);
  },
  setUserInfo(state: UserStateType, payload: any): void {
    state.info = payload.info;
  }
};

const actions = {
  login(store: any, payload: LoginInfoType): Promise<any> {
    return login(payload)
      .then(({ data }: any) => {
        store.commit('setToken', data);
        return data.token;
      })
      .then((token: string) => {
        payload.remembered && localStorage.setItem(Final.TOKEN, token);
      })
      .then(async () => {
        await store.dispatch('getLoginUser');
      })
      .then(() => {
        const redirect = router.currentRoute.value.query.redirect as string;
        router.push(redirect || '/');
      });
  },
  logout(store: any): Promise<any> {
    return logout()
      .then(() => {
        store.commit('reset');
      })
      .then(() => {
        // 返回登录界面
        router
          .push(`/login?redirect=${encodeURIComponent(router.currentRoute.value.fullPath)}`)
          .then(() => {
            store.commit('menu/resetMenu', { newRoutes: [] }, { root: true });
            // 重置路由
            resetRoutes([]);
          });
      });
  },
  async getLoginUser(store: any): Promise<any> {
    const { data }: any = await getUseInfo();

    store.commit('setUserInfo', data);
    // 将后端菜单列表转换为vue-router列表
    const newRoutes = transformRoutes(data.menus);

    store.commit('menu/resetMenu', { newRoutes }, { root: true });
    store.commit('setting/setCacheList', { routes: newRoutes }, { root: true });

    // 重置路由
    resetRoutes(newRoutes);

    return data;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
