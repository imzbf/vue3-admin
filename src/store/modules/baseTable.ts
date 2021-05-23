import { getRadioStatus, getBaseTableList } from '@/apis/table/table.api';

// ------------------------------------（1）基础列表部分-----------------------------------------
// STATE_TYPE

export interface BaseTableType {
  statusList: Array<any>;
  dataSourceList: Array<any>;
  total: number;
}
// STATE
const baseTableState: BaseTableType = {
  statusList: [],
  dataSourceList: [],
  total: 0
};

// ACTIONS
const baseTableActions = {
  // 获取到状态按钮
  getRadioStatus(store: any): Promise<any> {
    return getRadioStatus().then((data: any) => {
      store.commit('setRadioStatus', data);
      return data.token;
    });
  },
  // 获取标准表格列表
  getBaseTableList(
    store: any,
    payload: { pageNo: number; pageSize: number }
  ): Promise<any> {
    return getBaseTableList(payload.pageNo, payload.pageSize, '').then((res) => {
      store.commit('setBaseDataList', res);
    });
  }
};
// MUTATIONS
const baseTableMutations = {
  setRadioStatus(state: BaseTableType) {
    state.statusList = [
      { name: '全部', value: 'all' },
      { name: '进行中', value: 'doing' },
      { name: '等待中', value: 'wating' }
    ];
  },
  setBaseDataList(state: BaseTableType, payload: any) {
    const { records, total } = payload;
    state.dataSourceList = records;
    state.total = total;
  }
};
// MODULE
const baseTbaleModule = {
  state: baseTableState,
  namespaced: true,
  actions: baseTableActions,
  mutations: baseTableMutations
};

export default baseTbaleModule;
