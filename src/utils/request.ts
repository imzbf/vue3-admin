import { App } from 'vue';
import axios from 'axios';

const axiosInstance = axios.create();

// console.log(process.env.NODE_ENV);
// {NODE_ENV: "production"}

export default {
  install(app: App<Element>): void {
    Object.defineProperty(app.config.globalProperties, '$axios', {
      value: axiosInstance
    });
  }
};
