import { logout } from '@/apis/user';
import Final from '@/config/final';
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
  reset(state: UserStateType): void {
    state.token = '';
    state.info = initInfo;
    localStorage.removeItem(Final.TOKEN);
  }
};

const actions = {
  logout(store: any): Promise<any> {
    return logout()
      .then(() => {
        store.commit('reset');
      })
      .then(() => {
        // 返回登录界面
        router.push('/login');
      });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
