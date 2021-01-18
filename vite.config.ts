import path from 'path';
import { createMockServer } from 'vite-plugin-mock';

export default {
  base: '/',
  outDir: 'dist',
  hostname: 'localhost',
  port: 33,
  open: true,
  https: false,
  ssr: false, // 服务端渲染
  alias: {
    // 键必须以斜线开始和结束
    '/@/': path.resolve(__dirname, './src')
  },
  plugins: [
    createMockServer({
      ignore: /^_/,
      mockPath: path.resolve(__dirname, './mock'),
      watchFiles: true, // 修改更新
      localEnabled: process.env.NODE_ENV === 'development'
    })
  ]
  // proxy: {
  //   '/api': {
  //     target: 'http://127.0.0.1:6789',
  //     changeOrigin: true
  //   }
  // }
};
