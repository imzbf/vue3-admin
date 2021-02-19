import { AdminRouteRecordRaw } from '..';
import Layout from '@/layouts';

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
      component: () => import('@/views/User')
    },
    {
      path: 'setting',
      name: 'Setting',
      meta: { title: '个人设置' },
      component: () => import('@/views/User/Setting')
    }
  ]
};

export default userModule;
