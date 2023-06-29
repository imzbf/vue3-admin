import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { ElMessage } from 'element-plus';
import { TOKEN } from '@/config/keys';
import { logout as logoutApi, login as loginApi, getUseInfo, LoginInfoType } from '@/apis/user';
import router from '@/router';
import { transformRoutes, resetRoutes } from '@/utils/biz';
import { useMenuStore } from '../menu';
import { useSettingStore } from '../setting';

export interface UserStateType {
  info?: {
    username: string;
    avatar: string;
  };
  token?: string;
}

const defaultInfo = {
  username: '',
  avatar: ''
};

export const useUserStore = defineStore('user', () => {
  const state = reactive({
    info: defaultInfo,
    token: localStorage.getItem(TOKEN) || ''
  });

  // 重置用户信息
  const reset = () => {
    state.info = defaultInfo;
    state.token = '';
    localStorage.removeItem(TOKEN);
  };

  const getLoginUser = async () => {
    const menuStore = useMenuStore();
    const settingStore = useSettingStore();
    const { code, data, msg } = await getUseInfo();
    if (code === 0) {
      state.info = data;
      // 将后端菜单列表转换为vue-router列表
      const newRoutes = transformRoutes(data.menus);

      menuStore.resetMenu(newRoutes);
      settingStore.setCacheList(newRoutes);

      // 重置路由
      resetRoutes(newRoutes);

      return data;
    } else {
      state.token = '';
      localStorage.removeItem(TOKEN);
      ElMessage.error(msg);
    }
  };

  const login = async (data: LoginInfoType) => {
    return await loginApi(data)
      .then(({ data }) => {
        state.token = data.token;
        localStorage.setItem(TOKEN, data.token);
      })
      .then(() => {
        getLoginUser().then(() => {
          const redirect = router.currentRoute.value.query.redirect as string;
          router.push(redirect || '/');
        });
      });
  };

  const logout = async () => {
    const menuStore = useMenuStore();

    return await logoutApi().then(({ code, msg }) => {
      if (code === 0) {
        reset();

        // 返回登录界面
        router
          .push(`/login?redirect=${encodeURIComponent(router.currentRoute.value.fullPath)}`)
          .then(() => {
            menuStore.resetMenu([]);
            // 重置路由
            resetRoutes([]);
          });
      } else {
        ElMessage.error(msg);
      }
    });
  };

  return {
    state,
    reset,
    login,
    logout,
    getLoginUser
  };
});
