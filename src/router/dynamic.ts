export interface ViewList {
  layout: () => Promise<any>;
  login: () => Promise<any>;
  dashboard: () => Promise<any>;
  // 图形
  chart_data: () => Promise<any>;
  card_data: () => Promise<any>;
  // 表单
  base_form: () => Promise<any>;
  def_form: () => Promise<any>;
  // 多级菜单demo
  demo_m1: () => Promise<any>;
  demo_m2: () => Promise<any>;
  demo_m2_1: () => Promise<any>;
  demo_m2_2: () => Promise<any>;
  // 用户
  user_center: () => Promise<any>;
  user_setting: () => Promise<any>;
  // 表格
  table_base: () => Promise<any>;
  table_dynamic: () => Promise<any>;
  // 错误
  error_403: () => Promise<any>;
  error_404: () => Promise<any>;
  error_500: () => Promise<any>;
}

const DynamisList: ViewList = {
  layout: () => import('@/layouts'),
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

export default DynamisList;
