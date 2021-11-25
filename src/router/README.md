# 路由配置

dynamic.ts 将所有需要动态加载的组件通过 key-value 结合，可以考虑服务端通过存储 key 值来达到动态加载的目的。（也有说法这样不符合分离逻辑，那么可以采用的角色路由逻辑）

当某个模块下的路由配置过复杂，考虑存放到 modules 中，提高代码可阅读性。

本项目采用**公共路由**+**动态路由**方式实现路由权限管理。

## keep-alive

实现组件缓存有两种设置方式，一种是在指定的组件中添加某些属性达到标识缓存组件的方式，另一种是将`keepAlive`标识添加到路由配置项 meta 上。

```
{
    path: '/form',
    component: 'layout',
    redirect: '/form/base',
    name: 'Form',
    meta: { title: '表单页', iconName: 'FormOutlined', keepAlive: true }
  }
```

本项目采用第二种方式，以便后端修改缓存配置

> 注意：路由 name 务必与组件名一致，否则无法正常运行，keep-alive 组件 includes 接受组件中定义的名称
