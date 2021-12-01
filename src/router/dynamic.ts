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
  DemoM1: () => Promise<any>;
  DemoM2: () => Promise<any>;
  DemoM2_1: () => Promise<any>;
  DemoM2_2: () => Promise<any>;
  // // 用户
  UserCenter: () => Promise<any>;
  UserSetting: () => Promise<any>;
  // 表格
  Table: () => Promise<any>;
  List: () => Promise<any>;
  // // 错误
  Error403: () => Promise<any>;
  Error404: () => Promise<any>;
  Error500: () => Promise<any>;
  Redirect: () => Promise<any>;
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
  DemoM1: () => import('@/pages/MenuDemo/M1/index.vue'),
  DemoM2: () => import('@/pages/MenuDemo/M2/index.vue'),
  DemoM2_1: () => import('@/pages/MenuDemo/M2/M2-1/index.vue'),
  DemoM2_2: () => import('@/pages/MenuDemo/M2/M2-2/index.vue'),
  // // 用户
  UserCenter: () => import('@/pages/User/index.vue'),
  UserSetting: () => import('@/pages/User/Setting/index.vue'),
  // // 表格
  Table: () => import('@/pages/List/Table/index.vue'),
  List: () => import('@/pages/List/index.vue'),
  // // 错误
  Error403: () => import('@/pages/Error/403.vue'),
  Error404: () => import('@/pages/Error/404.vue'),
  Error500: () => import('@/pages/Error/500.vue'),
  Redirect: () => import('@/pages/Redirect/index.vue')
};

export default DynamisList;
