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
    component: 'layout',
    redirect: '/dashboard',
    meta: { title: '首页', iconName: 'DataBoard' },
    name: 'Index',
    menu: true,
    children: [
      {
        path: 'dashboard',
        name: 'DashboardPage',
        component: 'dashboard',
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
    component: 'layout',
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
        name: 'FormBase',
        component: 'base_form',
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
        name: 'FormDef',
        component: 'def_form',
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
    component: 'layout',
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
    component: 'layout',
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
    path: '/table',
    component: 'layout',
    redirect: '/table/base',
    name: 'Table',
    meta: { title: '表格页', iconName: 'Collection' },
    menu: true,
    children: [
      {
        path: 'base',
        name: 'TableBase',
        meta: {
          title: '基本表格',
          iconName: 'Collection',
          cname: 'ViewTableBasic',
          keepAlive: true
        },
        menu: true,
        component: 'table_base'
      },
      {
        path: 'query',
        name: 'TableQuery',
        meta: {
          title: '查询表格',
          iconName: 'Collection',
          cname: 'ViewTableQuery',
          keepAlive: true
        },
        menu: true,
        component: 'table_query'
      }
    ]
  }
];
const ErrorModule: Menu[] = [
  {
    path: '/error',
    component: 'layout',
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
        component: 'error_403'
      },
      {
        path: '404',
        name: '404',
        meta: { title: '404', iconName: 'MagicStick' },
        menu: true,
        component: 'error_404'
      },
      {
        path: '500',
        name: '500',
        meta: { title: '500', iconName: 'MagicStick' },
        menu: true,
        component: 'error_500'
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
const ComponentModule: Menu[] = [
  {
    path: '/component',
    component: 'layout',
    redirect: '/component/chart',
    name: 'Component',
    meta: { title: '自定义组件', iconName: 'Operation' },
    menu: true,
    children: [
      {
        path: 'card',
        name: 'Card',
        meta: { title: '卡片', iconName: 'Operation' },
        menu: true,
        component: 'card_data'
      },
      {
        path: 'editor',
        name: 'MdEditor',
        meta: { title: '编辑器', iconName: 'Operation' },
        menu: true,
        component: 'editor_md'
      }
    ]
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
          ...ComponentModule,
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
          ...ComponentModule,
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
