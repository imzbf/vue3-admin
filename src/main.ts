import { createApp } from 'vue';
import App from './App';
import router from './router';
import store, { key } from './store';
import request from '@/utils/request';

import './styles/global.scss';

createApp(App).use(request).use(store, key).use(router).mount('#app');
