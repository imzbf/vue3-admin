import path from 'path';
import { ConfigEnv, UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import mock from './mock';
// import ElementPlus from 'unplugin-element-plus/vite';

import { homepage } from './package.json';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfigExport => {
  return {
    base: mode === 'preview' ? homepage : '/',
    publicDir: './public',
    server: {
      port: 6677,
      open: true
      // proxy: {
      //   '/api': {
      //     target: 'http://jsonplaceholder.typicode.com',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, '')
      //   }
      // }
    },
    resolve: {
      alias: {
        // 键必须以斜线开始和结束
        '@': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      vue(),
      mock()
      // ElementPlus({
      //   useSource: true
      // })
    ]
  };
};
