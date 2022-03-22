import { AdminRouteRecordRaw } from '..';
import Layout from '@/layouts/index.vue';
import DynamicRoutes from '../dynamic';

// bug: 如果直接将m2Children放到demo中，会产生menu不存在的问题，尚未找到原因
const m2Children: AdminRouteRecordRaw[] = [
  {
    path: 'm1',
    name: 'Menu1-2-1',
    meta: { title: '菜单1-2-1', iconName: 'QuestionCircleOutlined' },
    menu: true,
    component: DynamicRoutes.demo_m2_1
  },
  {
    path: 'm2',
    menu: true,
    name: 'Menu1-2-2',
    meta: { title: '菜单1-2-2', iconName: 'QuestionCircleOutlined' },
    component: DynamicRoutes.demo_m2_2
  }
];

const demoModule: AdminRouteRecordRaw = {
  path: '/m',
  component: Layout,
  redirect: '/m/m1',
  name: 'Menu0',
  meta: {
    title: '多级菜单',
    iconName: 'QuestionOutlined'
  },
  menu: true,
  children: [
    {
      path: 'm1',
      name: 'Menu1-1',
      meta: { title: '菜单1-1', iconName: 'QuestionCircleOutlined' },
      menu: true,
      component: DynamicRoutes.demo_m1
    },
    {
      path: 'm2',
      name: 'Menu1-2',
      meta: { title: '菜单1-2', iconName: 'QuestionCircleOutlined' },
      menu: true,
      component: DynamicRoutes.demo_m2,
      redirect: '/m/m2/m1',
      children: m2Children
    }
  ]
};

export default demoModule;
