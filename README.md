# vue3-admin

<p>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/badge/node-%3E=14.0.0-green.svg" alt="node compatility"></a>
</p>

## 介绍

项目基于 [vue@3.x](https://v3.cn.vuejs.org/guide) 系列开发（文档：[router@4.x](https://next.router.vuejs.org/zh/guide/index.html)、[vuex@4.x](https://next.vuex.vuejs.org/)），UI 组件库使用 [ant-design-vue@2.x](https://2x.antdv.com/components/overview-cn/)，开发环境使用 [vite@2.x](https://cn.vitejs.dev/) 搭配纯 jsx。

目前支持了登录及主结构，异步菜单，在线切换暗黑、亮白主题及少数 demo 等。

## 预览

在线预览：（<a href="https://imzbf.github.io/vue3-admin" target="_blank">传送门</a>）

**登录**

1. 暗黑主题

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de997518c37f46a4b26f0939e0048214~tplv-k3u1fbpfcp-watermark.image)

2. 白色主题

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/640fbc6da1a64ecab84372696c0f7a7e~tplv-k3u1fbpfcp-watermark.image)

**工作台**

1. 暗黑主题

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e1a1f24e35647cc933725fffb73559c~tplv-k3u1fbpfcp-watermark.image)

2. 白色模式

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7faf73feba0d407d8bbd07891e2c34fe~tplv-k3u1fbpfcp-watermark.image)

## 项目结构说明

```
├── mock                     # 开发模式下的模拟接口，预览模式下使用的fastmock
├── public
│   ├── static               # 静态引用资源
│   └── favicon.ico          # Favicon
├── src
│   ├── apis                 # 接口请求封装方法
│   ├── assets
│   ├── components           # 业务通用组件
│   ├── config               # 项目中的配置
│   ├── layouts              # 通用布局
│   ├── router               # vue路由配置
│   ├── store                # vuex配置
│   ├── styles               # 全局样式
typing # ts 类型申明文件
│   ├── utils                # 工具库
│   └── views                # 业务页面
├── .env                     # 公共的环境常量
├── .env.development         # 开发环境下的环境常量
├── .env.preview             # 预览模式下的环境常量
├── .env.production          # 生产环境下的环境常量
├── .eslintignore            # eslint忽略项配置
├── .gitignore
├── .prettierignore          # prettier忽略项配置
├── index.html               # vite规范的入口文件
├── LICENSE
├── package.json
├── README DEV.md            # 开发文档（待完善）
├── tsconfig.json            # ts config
├── README.md
├── vite.config.ts           # vite配置文件
└── yarn.lock                # 当前版本的lock
```

## 注意

1. html 中引用的 less 版本目前仅支持 2.7.3 版本；
2. 目前 build 前需要保证 public/static 下有 color.less 文件（即先运行过 dev，后续将修复）;

...
