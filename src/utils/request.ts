// import { App } from 'vue';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import store from '@/store';
import Final from '@/config/keys';

// const data = {
//   code: 0,
//   msg: '',
//   data: {}
// };

const axiosInstance = axios.create({
  timeout: 7600,
  baseURL: import.meta.env.VITE_BASE_URL as string
});

interface ErrorType {
  response?: AxiosResponse;
  [name: string]: any;
}

// 异常拦截处理器
const errorHandler = (error: ErrorType) => {
  if (error.response) {
    const { data } = error.response;

    // 假定40000为未登录
    if (data?.code === 40000) {
      const token = localStorage.getItem(Final.TOKEN);
      // 清除过期登陆信息，返回登录页面
      token && store.dispatch('user/logout');
    }
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.request.use((config: AxiosRequestConfig): any => {
  if (store.getters.token) {
    (config.headers as any).TOKEN = store.getters.token;
  }
  return config;
}, errorHandler);

axiosInstance.interceptors.response.use((response: AxiosResponse<any>) => {
  return response.data;
}, errorHandler);

export default axiosInstance;

// console.log(process.env.NODE_ENV);
// {NODE_ENV: "production"}

// export default {
//   install(app: App<Element>): void {
//     Object.defineProperty(app.config.globalProperties, '$axios', {
//       value: axiosInstance
//     });
//   }
// };
