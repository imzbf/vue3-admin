import { createApp } from 'vue';
import App from './App';
import router from './router';
import store, { key } from './store';
import 'ant-design-vue/dist/antd.css';
import './styles/global.scss';

createApp(App).use(store, key).use(router).mount('#app');
