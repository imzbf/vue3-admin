import { MockMethod } from 'vite-plugin-mock';
import Icon from '@element-plus/icons-vue';
import { ViewList } from '../src/router/dynamic';

import { ADMIN_TOKEN } from './login';

interface Menu {
  path: string;
  name: string;
  component?: keyof ViewList;
  redirect?: string;
  menu?: boolean;
  outLink?: string;
  meta?: {
    title?: string;
    // 使用的标准Icon组件名称
    iconName?: keyof typeof Icon;
    // 阿里矢量图标js标准，使用svg创建，以#开头
    iconHref?: string;
    // 路由对应组件名称，务必与组件name一致
    cname?: keyof ViewList;
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
          cname: 'Dashboard',
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
      iconName: 'Platform'
    },
    menu: true,
    children: [
      {
        path: 'base',
        name: 'BaseFormPage',
        component: 'BaseForm',
        menu: true,
        meta: {
          title: '基本表单',
          iconName: 'HotWater',
          cname: 'BaseForm',
          keepAlive: true
        }
      },
      {
        path: 'def',
        name: 'DefFormPage',
        component: 'DefForm',
        menu: true,
        meta: {
          title: '自定义表单',
          iconName: 'HotWater',
          cname: 'DefForm',
          keepAlive: true
        }
      }
    ]
  }
];

const DemoModule: Menu[] = [
  {
    path: '/component',
    component: 'Layout',
    redirect: '/component/base',
    name: 'ComponentPage',
    meta: {
      title: '组件库',
      iconName: 'Cherry'
    },
    menu: true,
    children: [
      {
        path: 'base',
        name: 'BaseComponentPage',
        meta: { title: '基础组件', iconName: 'Cherry' },
        menu: true,
        component: 'BaseComponent',
        redirect: '/component/base/button',
        children: [
          {
            path: 'button',
            name: 'ButtonPage',
            meta: { title: '按钮组件', iconName: 'Cherry', cname: 'Button', keepAlive: true },
            menu: true,
            component: 'Button'
          },
          {
            path: 'layout',
            name: 'LayoutPage',
            meta: { title: '布局组件', iconName: 'Cherry', cname: 'LayoutC', keepAlive: true },
            menu: true,
            component: 'LayoutC'
          }
        ]
      },
      {
        path: 'feedback',
        name: 'Feedback',
        meta: { title: '反馈组件', iconName: 'Cherry' },
        menu: true,
        component: 'FeedbackComponent',
        redirect: '/component/feedback/alert',
        children: [
          {
            path: 'alert',
            name: 'AlertPage',
            meta: { title: '文字提醒', iconName: 'Cherry', cname: 'Alert', keepAlive: true },
            menu: true,
            component: 'Alert'
          },
          {
            path: 'message',
            menu: true,
            name: 'MessagePage',
            meta: { title: '消息提示', iconName: 'Cherry', cname: 'Message', keepAlive: true },
            component: 'Message'
          }
        ]
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
          cname: 'Table',
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
          cname: 'List',
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
        meta: { title: '403', iconName: 'MagicStick', cname: 'Error403', keepAlive: true },
        menu: true,
        component: 'Error403'
      },
      {
        path: '404',
        name: '404',
        meta: { title: '404', iconName: 'MagicStick', cname: 'Error404', keepAlive: true },
        menu: true,
        component: 'Error404'
      },
      {
        path: '500',
        name: '500',
        meta: { title: '500', iconName: 'MagicStick', cname: 'Error500', keepAlive: true },
        menu: true,
        component: 'Error500'
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
          ...TableModule,
          ...ErrorModule,
          ...DemoModule,
          ...OutLinkModule
        ];
      } else {
        menus = [
          ...DashboardModule,
          ...DataModule,
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
  },
  {
    url: '/api/user/device',
    method: 'get',
    response: ({ headers, query }: any): any => {
      const { page, pageSize } = query;

      return headers.token
        ? {
            code: 500,
            data: {
              total: 96,
              pageSize,
              page,
              list: [
                {
                  id: 1,
                  deviceOS: 'Windows 11',
                  ip: '10.0.0.1',
                  lastLoginTime: '@date("yyyy-MM-dd HH:mm:ss")',
                  location: '中国 台湾'
                },
                {
                  id: 2,
                  deviceOS: 'MacOS',
                  ip: '10.0.0.2',
                  lastLoginTime: '@date("yyyy-MM-dd HH:mm:ss")',
                  location: '中国 重庆'
                }
              ]
            }
          }
        : {
            code: 500,
            data: null,
            msg: '您未登录！'
          };
    }
  }
];

export default user;
