import { AdminRouteRecordRaw } from '..';
import Layout from '@/layouts/index.vue';
import DynamicRoutes from '../dynamic';

const userModule: AdminRouteRecordRaw = {
  path: '/user',
  component: Layout,
  name: 'User',
  meta: { title: '用户中心' },
  children: [
    {
      path: '',
      name: 'UserIndex',
      meta: { title: '个人中心' },
      component: DynamicRoutes.user_center
    },
    {
      path: 'setting',
      name: 'Setting',
      meta: { title: '个人设置' },
      component: DynamicRoutes.user_setting
    }
  ]
};

export default userModule;
