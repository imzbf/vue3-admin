import { createApp } from 'vue';
import router from './router';
import store, { key } from './store';
import App from './App.vue';
import 'nprogress/nprogress.css';
import './styles/common.scss';
import '@/assets/iconfonts/login/iconfont';

import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/theme-chalk/dark/css-vars.css';
import '@/styles/element.scss';

import { getToken } from '@/utils/biz';

const mount = () => {
  createApp(App)
    .use(ElementPlus, {
      locale: zhCn
    })
    .use(store, key)
    .use(router)
    .mount('#app');
};

if (getToken()) {
  // 检测是否有用户信息
  if (!store.state.user.info?.username) {
    // 获取用户信息
    store.dispatch('user/getLoginUser').then(mount);
  }
} else {
  mount();
}
