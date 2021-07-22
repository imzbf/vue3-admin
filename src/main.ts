import { createApp } from 'vue';
import App from './App';
import router from './router';
import store, { key } from './store';
// import 'ant-design-vue/dist/antd.css';
import 'ant-design-vue/dist/antd.less';
import './styles/global.less';
import 'nprogress/nprogress.css';

import { getToken } from '@/utils/biz';

if (getToken()) {
  // 检测是否有用户信息
  if (!store.state.user.info?.username) {
    // 获取用户信息
    store.dispatch('user/getLoginUser').then(() => {
      createApp(App).use(store, key).use(router).mount('#app');
    });
  }
} else {
  createApp(App).use(store, key).use(router).mount('#app');
}
