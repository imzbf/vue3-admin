export interface ViewList {
  layout: () => Promise<any>;
  login: () => Promise<any>;
  // 首页
  dashboard: () => Promise<any>;
  // monitor: () => Promise<any>;
  // // 表单
  base_form: () => Promise<any>;
  def_form: () => Promise<any>;
  // // 多级菜单demo
  // demo_m1: () => Promise<any>;
  // demo_m2: () => Promise<any>;
  // demo_m2_1: () => Promise<any>;
  // demo_m2_2: () => Promise<any>;
  // // 用户
  // user_center: () => Promise<any>;
  // user_setting: () => Promise<any>;
  // // 表格
  // table_base: () => Promise<any>;
  // table_query: () => Promise<any>;
  // // 错误
  // error_403: () => Promise<any>;
  error_404: () => Promise<any>;
  // error_500: () => Promise<any>;
}

const DynamisList: ViewList = {
  layout: () => import('@/layouts/index.vue'),
  login: () => import('@/pages/Login/index.vue'),
  // 首页
  dashboard: () => import('@/pages/Dashboard/index.vue'),
  // monitor: () => import('@/views/Home/monitor'),
  // // 表单
  base_form: () => import('@/pages/Form/index.vue'),
  def_form: () => import('@/pages/Form/def.vue'),
  // // 多级菜单demo
  // demo_m1: () => import('@/views/MenuDemo/M1'),
  // demo_m2: () => import('@/views/MenuDemo/M2'),
  // demo_m2_1: () => import('@/views/MenuDemo/M2/M2-1'),
  // demo_m2_2: () => import('@/views/MenuDemo/M2/M2-2'),
  // // 用户
  // user_center: () => import('@/views/User'),
  // user_setting: () => import('@/views/User/Setting'),
  // // 表格
  // table_base: () => import('@/views/Table/Basic'),
  // table_query: () => import('@/views/Table/Query'),
  // // 错误
  // error_403: () => import('@/views/Error/403'),
  error_404: () => import('@/pages/Error/404.vue')
  // error_500: () => import('@/views/Error/500')
};

export default DynamisList;
