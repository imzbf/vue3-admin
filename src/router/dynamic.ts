export default {
  login: () => import('@/views/Login'),
  dashboard: () => import('@/views'),
  // 图形
  chart_data: () => import('@/views/Data'),
  card_data: () => import('@/views/Data/Oversee'),
  // 表单
  base_form: () => import('@/views/Form'),
  def_form: () => import('@/views/Form/Def'),
  // 多级菜单demo
  demo_m1: () => import('@/views/MenuDemo/M1'),
  demo_m2: () => import('@/views/MenuDemo/M2'),
  demo_m2_1: () => import('@/views/MenuDemo/M2/M2-1'),
  demo_m2_2: () => import('@/views/MenuDemo/M2/M2-2'),
  // 用户
  user_center: () => import('@/views/User'),
  user_setting: () => import('@/views/User/Setting'),
  // 表格
  table_base: () => import('@/views/Table'),
  table_dynamic: () => import('@/views/Table/Server'),
  // 错误
  error_403: () => import('@/views/Error/403'),
  error_404: () => import('@/views/Error/404'),
  error_500: () => import('@/views/Error/500')
};
