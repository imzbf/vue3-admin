import path from 'path';
import { UserConfigExport, ConfigEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';
import viteAntdTheme, { ThemeEntry, AntdThemeOptions } from 'vite-plugin-antd-theme';

const themesEntry: Array<ThemeEntry> = [
  // 暗黑主题
  {
    entryPath: './node_modules/ant-design-vue/lib/style/themes/dark.less',
    outputName: 'dark',
    outputPath: './src/config'
  },
  // 默认主题
  {
    entryPath: './src/styles/vars.less',
    outputName: 'light',
    outputPath: './src/config'
  },
  // 紧凑主题
  {
    entryPath: './node_modules/ant-design-vue/lib/style/themes/compact.less',
    outputName: 'compact',
    outputPath: './src/config'
  }
];

const options: AntdThemeOptions = {
  themesEntry,
  // 是否提取全部变量，默认false，优先级低于设置themeVariables
  allVariables: true,
  // 以下是antd-theme-generator配置项
  antDir: path.join(__dirname, './node_modules/ant-design-vue'),
  stylesDir: path.join(__dirname, './src'), // all files with .less extension will be processed
  varFile: path.join(__dirname, './src/styles/vars.less'), // default path is Ant Design default.less file
  themeVariables: [],
  outputFilePath: path.join(__dirname, './public/static/color.less'), // if provided, file will be created with generated less/styles
  customColorRegexArray: [/^fade\(.*\)$/] // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
};

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    base: '/',
    server: {
      host: 'localhost',
      open: true,
      port: 3344,
      https: false
    },
    resolve: {
      alias: {
        // 键必须以斜线开始和结束
        '@': path.resolve(__dirname, './src')
      }
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
      }),
      viteAntdTheme(options)
    ],
    css: {
      modules: {
        localsConvention: 'camelCase' // 默认只支持驼峰，修改为同事支持横线和驼峰
      },
      preprocessorOptions: {
        scss: { additionalData: `@import "@/styles/vars.scss";` },
        less: {
          javascriptEnabled: true,
          additionalData: `@import "@/styles/vars.less";`
        }
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
