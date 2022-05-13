# vue3-admin

<p>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/badge/node-%3E=14.0.0-green.svg" alt="node compatility"></a>
</p>

## 介绍

项目基于 [vue@3.x](https://v3.cn.vuejs.org/guide) 系列开发（文档：[router@4.x](https://next.router.vuejs.org/zh/guide/index.html)、[vuex@4.x](https://next.vuex.vuejs.org/)），UI 组件库使用 [element-plus](https://element-plus.gitee.io/zh-CN/)，开发环境使用 [vite@2.x](https://cn.vitejs.dev/)。

目前支持了登录及主结构，异步菜单，少数 demo 等。

## 预览

| 默认模式 | 暗夜模式 |
| --- | --- |
| ![默认模式](https://imzbf.github.io/vue3-admin/static/img/preview/login-default.png) | ![默认模式](https://imzbf.github.io/vue3-admin/static/img/preview/login-dark.png) |

在线预览：（<a href="https://imzbf.github.io/vue3-admin" target="_blank">传送门</a>）

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
├── tsconfig.json            # ts config
├── README.md
├── vite.config.ts           # vite配置文件
└── yarn.lock                # 当前版本的lock
```

## 资源申明

对于作者在项目引用的一些图片等资源，均支持非商用，并注明了资源出处，如需商用请注意该资源作者的使用条件！

## 结尾

> !!!`tsx`版本已不再维护，对使用`tsx`开发`vue3`项目感兴趣的可以从`tsx`分支切出代码学习使用。
