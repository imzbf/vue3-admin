import { MockMethod } from 'vite-plugin-mock';
// import Icon from '@ant-design/icons-vue/lib/icons';

import { ADMIN_TOKEN } from './login';

interface Menu {
  path: string;
  name: string;
  component?: string;
  redirect?: string;
  menu?: boolean;
  outLink?: string;
  meta?: {
    title?: string;
    // ant-design-vue使用的标准Icon组件名称
    // iconName?: keyof typeof Icon;
    // 阿里矢量图标js标准，使用svg创建，以#开头
    iconHref?: string;
    // 路由对应组件名称，务必与组件name一致
    cname?: string;
    // 是否缓存组件
    keepAlive?: boolean;
    [propName: string]: any;
  };
  children?: Array<Menu>;
}

const DashboardModule: Menu[] = [
  {
    path: '/',
    component: 'Layout',
    redirect: '/dashboard',
    meta: { title: '首页', iconName: 'DataBoard' },
    name: 'Index',
    menu: true,
    children: [
      {
        path: 'dashboard',
        name: 'DashboardPage',
        component: 'Dashboard',
        menu: true,
        meta: {
          title: '工作台',
          iconName: 'DataAnalysis',
          cname: 'ViewHomeWorkspace',
          keepAlive: true
        }
      }
    ]
  }
];

const DataModule: Menu[] = [
  {
    path: '/form',
    component: 'Layout',
    redirect: '/form/base',
    name: 'Form',
    meta: {
      title: '表单页',
      iconName: 'Platform',
      cname: 'ViewForm',
      keepAlive: true
    },
    menu: true,
    children: [
      {
        path: 'base',
        name: 'BaseForm',
        component: 'BaseForm',
        menu: true,
        meta: {
          title: '基本表单',
          iconName: 'HotWater',
          cname: 'ViewForm',
          keepAlive: true
        }
      },
      {
        path: 'def',
        name: 'DefForm',
        component: 'DefForm',
        menu: true,
        meta: {
          title: '自定义表单',
          iconName: 'HotWater',
          cname: 'ViewFormDef',
          keepAlive: true
        }
      }
    ]
  }
];

const DemoModule: Menu[] = [
  {
    path: '/m',
    component: 'Layout',
    redirect: '/m/m1',
    name: 'Menu0',
    meta: {
      title: '多级菜单',
      iconName: 'Cherry'
    },
    menu: true,
    children: [
      {
        path: 'm1',
        name: 'Menu1-1',
        meta: { title: '菜单1-1', iconName: 'Cherry' },
        menu: true,
        component: 'demo_m1'
      },
      {
        path: 'm2',
        name: 'Menu1-2',
        meta: { title: '菜单1-2', iconName: 'Cherry' },
        menu: true,
        component: 'demo_m2',
        redirect: '/m/m2/m1',
        children: [
          {
            path: 'm1',
            name: 'Menu1-2-1',
            meta: { title: '菜单1-2-1', iconName: 'Cherry' },
            menu: true,
            component: 'demo_m2_1'
          },
          {
            path: 'm2',
            menu: true,
            name: 'Menu1-2-2',
            meta: { title: '菜单1-2-2', iconName: 'Cherry' },
            component: 'demo_m2_2'
          }
        ]
      }
    ]
  }
];
const UserModule: Menu[] = [
  {
    path: '/user',
    component: 'Layout',
    name: 'User',
    meta: { title: '用户中心' },
    children: [
      {
        path: '',
        name: 'UserIndex',
        meta: { title: '个人中心', cname: 'ViewUser', keepAlive: true },
        component: 'user_center'
      },
      {
        path: 'setting',
        name: 'Setting',
        meta: { title: '个人设置', cname: 'ViewUserSetting', keepAlive: true },
        component: 'user_setting'
      }
    ]
  }
];
const TableModule: Menu[] = [
  {
    path: '/list',
    component: 'Layout',
    redirect: '/list/index',
    name: 'Table',
    meta: { title: '列表页', iconName: 'Collection' },
    menu: true,
    children: [
      {
        path: 'table',
        name: 'Table',
        meta: {
          title: '数据表格',
          iconName: 'Collection',
          cname: 'ViewTableQuery',
          keepAlive: true
        },
        menu: true,
        component: 'Table'
      },
      {
        path: 'index',
        name: 'ListIndex',
        meta: {
          title: '卡片列表',
          iconName: 'Collection',
          cname: 'ViewTableQuery',
          keepAlive: true
        },
        menu: true,
        component: 'List'
      }
    ]
  }
];
const ErrorModule: Menu[] = [
  {
    path: '/error',
    component: 'Layout',
    redirect: '/error/404',
    name: 'Error',
    meta: {
      title: '异常页',
      iconName: 'MagicStick'
    },
    menu: true,
    children: [
      {
        path: '403',
        name: '403',
        meta: { title: '403', iconName: 'MagicStick' },
        menu: true,
        component: 'error403'
      },
      {
        path: '404',
        name: '404',
        meta: { title: '404', iconName: 'MagicStick' },
        menu: true,
        component: 'Error404'
      },
      {
        path: '500',
        name: '500',
        meta: { title: '500', iconName: 'MagicStick' },
        menu: true,
        component: 'error500'
      }
    ]
  }
];
const OutLinkModule: Menu[] = [
  {
    path: '/outlink',
    name: 'Github',
    meta: { title: '外部链接', iconName: 'Promotion' },
    menu: true,
    outLink: 'https://github.com/imzbf/vue3-admin'
  }
];

const user: Array<MockMethod> = [
  {
    url: '/api/user',
    method: 'get',
    response: ({ headers }): any => {
      let menus = [];

      // 管理员角色菜单
      if (headers.token === ADMIN_TOKEN) {
        menus = [
          ...DashboardModule,
          ...DataModule,
          ...UserModule,
          ...TableModule,
          ...ErrorModule,
          ...DemoModule,
          ...OutLinkModule
        ];
      } else {
        menus = [
          ...DashboardModule,
          ...DataModule,
          ...UserModule,
          ...TableModule,
          ...ErrorModule,
          ...OutLinkModule
        ];
      }

      return {
        code: 0,
        data: {
          info: {
            username: headers.token === ADMIN_TOKEN ? '管理员' : '普通用户',
            avatar: '/static/img/head02.gif'
          },
          menus
        }
      };
    }
  }
];

export default user;
