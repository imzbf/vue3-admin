# vue3-admin

使用[vue@3.x](https://cn.vuejs.org/)系列开发。目前支持了登录及主结构，暗夜主题，国际化，异步权限菜单，少数 demo 等。

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
│   ├── utils                # 工具库
│   └── pages                # 业务页面
├── .drone.yml               # drone任务
├── .env                     # 公共的环境常量
├── .env.development         # 开发环境下的环境常量
├── .env.preview             # 预览模式下的环境常量
├── .env.production          # 生产环境下的环境常量
├── .eslintignore            # eslint忽略项配置
├── .gitignore
├── build.sh                 # 构建dokcer镜像并运行容器
├── Dockerfile               #
├── index.html               # vite规范的入口文件
├── nginx.conf               # docker镜像内运行的nginx的配置项
├── LICENSE
├── package.json
├── tsconfig.json            # ts config
├── README.md
├── vite.config.ts           # vite配置文件
└── yarn.lock                # 当前版本的lock
```

## 结尾

> !!!`tsx`版本已不再维护，对使用`tsx`开发`vue3`项目感兴趣的可以从`tsx`分支切出代码学习使用。
