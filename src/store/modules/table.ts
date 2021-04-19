import { getRadioStatus, getBaseTableList } from '@/apis/table/baseTable.api';

export interface BaseTableType {
  statusList: Array<any>;
  dataSourceList: Array<any>;
  total: number;
}

const state: BaseTableType = {
  statusList: [],
  dataSourceList: [],
  total: 0
};

const mutations = {
  setRadioStatus(state: BaseTableType) {
    state.statusList = [
      { name: '全部', value: 'all' },
      { name: '进行中', value: 'doing' },
      { name: '等待中', value: 'wating' }
    ];
  },
  setDataList(state: BaseTableType, payload: any) {
    const { records, total } = payload;
    state.dataSourceList = records;
    state.total = total;
  }
};

const actions = {
  // 获取到状态按钮
  getRadioStatus(store: any): Promise<any> {
    return getRadioStatus().then(({ data }: any) => {
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
      store.commit('setDataList', res.data);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
