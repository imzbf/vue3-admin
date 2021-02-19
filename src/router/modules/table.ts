import { AdminRouteRecordRaw } from '..';
import Layout from '@/layouts';
import DynamicRoutes from '../dynamic';

const Table: AdminRouteRecordRaw = {
  path: '/table',
  component: Layout,
  redirect: '/table/base',
  name: 'Table',
  meta: { title: '表格页', iconName: 'TableOutlined' },
  menu: true,
  children: [
    {
      path: 'base',
      name: 'TableBase',
      meta: { title: '基本表格', iconName: 'TableOutlined' },
      menu: true,
      component: DynamicRoutes.table_base
    },
    {
      path: 'server',
      name: 'TableServer',
      meta: { title: '动态数据表格', iconName: 'TabletOutlined' },
      menu: true,
      component: DynamicRoutes.table_dynamic
    }
  ]
};

export default Table;
