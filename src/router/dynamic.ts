export interface ViewList {
  Layout: () => Promise<any>;
  Login: () => Promise<any>;
  // 首页
  Dashboard: () => Promise<any>;
  // monitor: () => Promise<any>;
  // // 表单
  BaseForm: () => Promise<any>;
  DefForm: () => Promise<any>;
  // // 多级菜单demo
  // demo_m1: () => Promise<any>;
  // demo_m2: () => Promise<any>;
  // demo_m2_1: () => Promise<any>;
  // demo_m2_2: () => Promise<any>;
  // // 用户
  // user_center: () => Promise<any>;
  // user_setting: () => Promise<any>;
  // 表格
  Table: () => Promise<any>;
  List: () => Promise<any>;
  // // 错误
  error403: () => Promise<any>;
  Error404: () => Promise<any>;
  error500: () => Promise<any>;
}

const DynamisList: ViewList = {
  Layout: () => import('@/layouts/index.vue'),
  Login: () => import('@/pages/Login/index.vue'),
  // 首页
  Dashboard: () => import('@/pages/Dashboard/index.vue'),
  // monitor: () => import('@/views/Home/monitor'),
  // // 表单
  BaseForm: () => import('@/pages/Form/index.vue'),
  DefForm: () => import('@/pages/Form/def.vue'),
  // // 多级菜单demo
  // demo_m1: () => import('@/views/MenuDemo/M1'),
  // demo_m2: () => import('@/views/MenuDemo/M2'),
  // demo_m2_1: () => import('@/views/MenuDemo/M2/M2-1'),
  // demo_m2_2: () => import('@/views/MenuDemo/M2/M2-2'),
  // // 用户
  // user_center: () => import('@/views/User'),
  // user_setting: () => import('@/views/User/Setting'),
  // // 表格
  Table: () => import('@/pages/List/Table/index.vue'),
  List: () => import('@/pages/List/index.vue'),
  // // 错误
  error403: () => import('@/pages/Error/403.vue'),
  Error404: () => import('@/pages/Error/404.vue'),
  error500: () => import('@/pages/Error/500.vue')
};

export default DynamisList;
