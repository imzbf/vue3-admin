import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store, { key } from './store';
import ElementPlus from 'element-plus';
import request from '/@/utils/request';

import 'element-plus/lib/theme-chalk/index.css';
import './styles/global.scss';

createApp(App).use(request).use(store, key).use(router).use(ElementPlus).mount('#app');
