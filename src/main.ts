import { createApp } from 'vue';
import router from './router';
import store, { key } from './store';
import App from './App.vue';
import 'nprogress/nprogress.css';
import './styles/common.scss';

import ElementPlus from 'element-plus';
import '@/styles/element.scss';

import { getToken } from '@/utils/biz';

if (getToken()) {
  // 检测是否有用户信息
  if (!store.state.user.info?.username) {
    // 获取用户信息
    store.dispatch('user/getLoginUser').then(() => {
      createApp(App).use(ElementPlus).use(store, key).use(router).mount('#app');
    });
  }
} else {
  createApp(App).use(ElementPlus).use(store, key).use(router).mount('#app');
}
