import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ElementPlus from 'unplugin-element-plus/vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 6677
  },
  resolve: {
    alias: {
      // 键必须以斜线开始和结束
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [vue(), ElementPlus()]
});
