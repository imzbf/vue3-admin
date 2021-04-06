import { createApp } from 'vue';
import App from './App';
import router from './router';
import store, { key } from './store';
import 'ant-design-vue/dist/antd.css';
import './styles/global.scss';
import 'nprogress/nprogress.css';

import { getToken } from '@/utils/biz';

if (getToken()) {
  // 检测是否有用户信息
  if (!store.state.user.info?.username) {
    // 获取用户信息
    await store.dispatch('user/getLoginUser');
  }
}

createApp(App).use(store, key).use(router).mount('#app');
