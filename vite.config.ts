import path from 'path';
import { ConfigEnv, UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
// import ElementPlus from 'unplugin-element-plus/vite';
import { viteMockServe } from 'vite-plugin-mock';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    server: {
      port: 6677
    },
    resolve: {
      alias: {
        // 键必须以斜线开始和结束
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element-var.scss" as *;`
        }
      }
    },
    plugins: [
      vue(),
      viteMockServe({
        ignore: /^_/,
        mockPath: 'mock',
        watchFiles: true, // 修改更新
        localEnabled: command === 'serve'
      })
      // ElementPlus({
      //   useSource: true
      // })
    ]
  };
};
