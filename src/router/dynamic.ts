export interface ViewList {
  layout: () => Promise<any>;
  login: () => Promise<any>;
  // 首页
  workspace: () => Promise<any>;
  monitor: () => Promise<any>;
  // 自定义组件展示
  card_data: () => Promise<any>;
  editor_md: () => Promise<any>;
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
  table_query: () => Promise<any>;
  // 错误
  error_403: () => Promise<any>;
  error_404: () => Promise<any>;
  error_500: () => Promise<any>;
}

const DynamisList: ViewList = {
  layout: () => import('@/layouts'),
  login: () => import('@/views/Login'),
  // 首页
  workspace: () => import('@/views/Home/workspace'),
  monitor: () => import('@/views/Home/monitor'),
  // 自定义组件展示页
  card_data: () => import('@/views/Component/Card'),
  editor_md: () => import('@/views/Component/MdEditor'),
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
  table_base: () => import('@/views/Table/Basic'),
  table_dynamic: () => import('@/views/Table/Server'),
  table_query: () => import('@/views/Table/Query'),
  // 错误
  error_403: () => import('@/views/Error/403'),
  error_404: () => import('@/views/Error/404'),
  error_500: () => import('@/views/Error/500')
};

export default DynamisList;
