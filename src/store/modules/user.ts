import { logout, login, getUseInfo, LoginInfoType } from '@/apis/user';
import Final from '@/config/keys';
import router from '@/router';
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
      .then(() => {
        const from = router.currentRoute.value.query.from as string;
        router.push(from || '/');
      });
  },
  logout(store: any): Promise<any> {
    return logout()
      .then(() => {
        store.commit('reset');
      })
      .then(() => {
        // 返回登录界面
        router.push(
          `/login?from=${encodeURIComponent(router.currentRoute.value.fullPath)}`
        );
      });
  },
  getLoginUser(store: any): Promise<any> {
    return getUseInfo().then(({ data }: any) => {
      store.commit('setUserInfo', data);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
