import { createApp } from 'vue';
import { createPinia } from 'pinia';
import i18next from 'i18next';
import I18NextVue from 'i18next-vue';
import ElementPlus from 'element-plus';
import { getToken } from '@/utils/biz';

import zh_cn from '@/config/locale/zh/cn';
import en_us from '@/config/locale/en/us';

import { useSettingStore, useUserStore } from '@/stores';

import router from './router';
import App from './App.vue';
import 'nprogress/nprogress.css';
import './styles/common.scss';
import '@/assets/iconfonts/login/iconfont';

import 'element-plus/theme-chalk/dark/css-vars.css';
import '@/styles/element.scss';

const pinia = createPinia();
const app = createApp(App).use(pinia).use(ElementPlus).use(I18NextVue, { i18next });

const settingStore = useSettingStore();
const userStore = useUserStore();

const mount = async () => {
  await i18next.init({
    fallbackLng: settingStore.state.locale,
    resources: {
      'zh-CN': zh_cn,
      'en-US': en_us
    }
  });

  // 因为获取服务端的菜单配置是在getLoginUser之后，所以需要再最后再useRouter
  app.use(router).mount('#app');
};

// 检测是否有用户信息
if (getToken() && !userStore.state.info?.username) {
  // 获取用户信息
  userStore.getLoginUser().then(mount).catch(console.error);
} else {
  mount();
}
