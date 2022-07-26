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
  BaseComponent: () => Promise<any>;
  Button: () => Promise<any>;
  LayoutC: () => Promise<any>;

  FeedbackComponent: () => Promise<any>;
  Alert: () => Promise<any>;
  Message: () => Promise<any>;
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
  // 分配上传
  UploadSlice: () => Promise<any>;
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
  BaseComponent: () => import('@/pages/ElementUI/Base/index.vue'),
  Button: () => import('@/pages/ElementUI/Base/Button/index.vue'),
  LayoutC: () => import('@/pages/ElementUI/Base/LayoutC/index.vue'),

  FeedbackComponent: () => import('@/pages/ElementUI/Feedback/index.vue'),
  Alert: () => import('@/pages/ElementUI/Feedback/Alert/index.vue'),
  Message: () => import('@/pages/ElementUI/Feedback/Message/index.vue'),
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
  Redirect: () => import('@/pages/Redirect/index.vue'),
  UploadSlice: () => import('@/pages/Func/UploadChunk.vue')
};

export default DynamisList;
