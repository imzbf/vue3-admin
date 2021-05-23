// ---------------------------（2）查询列表部分------------------------------------

import { getQueryTableList } from '@/apis/table/table.api';

// STATE_TYPE
export interface QueryTableType {
  dataSourceList: Array<any>;
  total: number;
}
// STATE
const queryTableState: QueryTableType = {
  dataSourceList: [],
  total: 0
};
// ACTIONS
const queryTableActions = {
  getQueryTableList(
    store: any,
    payload: { pageNo: number; pageSize: number }
  ): Promise<any> {
    return getQueryTableList(payload.pageNo, payload.pageSize, '').then((res) => {
      store.commit('setQueryDataList', res);
    });
  }
};
// MUTATIONS
const queryTableMutations = {
  setQueryDataList(state: QueryTableType, payload: any) {
    const { records, total } = payload;
    state.dataSourceList = records;
    state.total = total;
  }
};

// MODULE
const queryTableModule = {
  namespaced: true,
  state: queryTableState,
  actions: queryTableActions,
  mutations: queryTableMutations
};
export default queryTableModule;
