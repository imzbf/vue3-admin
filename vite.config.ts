import path from 'path';
import { UserConfigExport, ConfigEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    base: '/',
    server: {
      host: 'localhost',
      open: true,
      port: 33,
      https: false
    },
    alias: {
      // 键必须以斜线开始和结束
      '@': path.resolve(__dirname, './src')
    },
    plugins: [
      vue(),
      viteMockServe({
        ignore: /^_/,
        mockPath: 'mock',
        watchFiles: true, // 修改更新
        localEnabled: command === 'serve'
      }),
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
      })
    ],
    css: {
      modules: {
        localsConvention: 'camelCase' // 默认只支持驼峰，修改为同事支持横线和驼峰
      }
    }
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:6789',
    //     changeOrigin: true
    //   }
    // }
  };
};
