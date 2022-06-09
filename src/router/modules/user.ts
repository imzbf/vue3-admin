import { AdminRouteRecordRaw } from '..';
import DynamicRoutes from '../dynamic';

const userRoutes: AdminRouteRecordRaw = {
  path: '/user',
  component: DynamicRoutes.Layout,
  name: 'User',
  meta: { title: '用户中心' },
  redirect: '/user/index',
  children: [
    {
      path: 'index',
      name: 'UserIndex',
      meta: { title: '个人中心', cname: 'UserCenter' },
      component: DynamicRoutes.UserCenter
    },
    {
      path: 'setting',
      name: 'Setting',
      meta: { title: '个人设置', cname: 'UserSetting' },
      component: DynamicRoutes.UserSetting,
      redirect: '/user/setting/account',
      children: [
        {
          path: 'account',
          name: 'UserSettingAccount',
          meta: { title: '资料设置' },
          component: () => import('@/pages/User/Setting/Account/index.vue')
        },
        {
          path: 'security',
          name: 'UserSettingSecurity',
          meta: { title: '安全设置' },
          component: () => import('@/pages/User/Setting/Security/index.vue')
        },
        {
          path: 'binding',
          name: 'UserSettingBinding',
          meta: { title: '账号绑定' },
          component: () => import('@/pages/User/Setting/Binding/index.vue')
        },
        {
          path: 'message',
          name: 'UserSettingMessage',
          meta: { title: '消息通知' },
          component: () => import('@/pages/User/Setting/Message/index.vue')
        }
      ]
    }
  ]
};

export default userRoutes;
