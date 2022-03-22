import { AdminRouteRecordRaw } from '..';
import Layout from '@/layouts/index.vue';
import DynamicRoutes from '../dynamic';

const Error: AdminRouteRecordRaw[] = [
  {
    path: '/404',
    meta: { title: '页面不见啦.' },
    component: DynamicRoutes.error_404
  },
  {
    path: '/error',
    component: Layout,
    redirect: '/error/404',
    name: 'Error',
    meta: {
      title: '异常页',
      iconName: 'QuestionOutlined'
    },
    menu: true,
    children: [
      {
        path: '403',
        name: '403',
        meta: { title: '403', iconName: 'QuestionCircleOutlined' },
        menu: true,
        component: DynamicRoutes.error_403
      },
      {
        path: '404',
        name: '404',
        meta: { title: '404', iconName: 'QuestionCircleOutlined' },
        menu: true,
        component: DynamicRoutes.error_404
      },
      {
        path: '500',
        name: '500',
        meta: { title: '500', iconName: 'QuestionCircleOutlined' },
        menu: true,
        component: DynamicRoutes.error_500
      }
    ]
  }
];

export default Error;
