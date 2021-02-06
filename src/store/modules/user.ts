export interface UserStateType {
  info?: any;
  token?: string;
}

const state: UserStateType = {
  info: {},
  token: ''
};

const mutations = {};

const actions = {
  async logout(): Promise<any> {
    console.log(import.meta.env);
    return await Promise.resolve();
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
