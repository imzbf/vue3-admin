import { createApp } from 'vue';
import i18next from 'i18next';
import I18NextVue from 'i18next-vue';
import ElementPlus from 'element-plus';

import { getToken } from '@/utils/biz';

import zh_cn from '@/config/locale/zh/cn';
import en_us from '@/config/locale/en/us';

import router from './router';
import store, { key } from './store';
import App from './App.vue';
import 'nprogress/nprogress.css';
import './styles/common.scss';
import '@/assets/iconfonts/login/iconfont';

import 'element-plus/theme-chalk/dark/css-vars.css';
import '@/styles/element.scss';

const mount = async () => {
  await i18next.init({
    fallbackLng: store.state.setting.locale,
    resources: {
      'zh-CN': zh_cn,
      'en-US': en_us
    }
  });

  createApp(App)
    .use(ElementPlus)
    .use(I18NextVue, { i18next })
    .use(store, key)
    .use(router)
    .mount('#app');
};

// 检测是否有用户信息
if (getToken() && !store.state.user.info?.username) {
  // 获取用户信息
  store.dispatch('user/getLoginUser').then(mount);
} else {
  mount();
}
