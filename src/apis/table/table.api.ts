import axios from '@/utils/request';

// 获取单选选项
export const getRadioStatus = (): Promise<any> => axios.get('/table/statusRadio');

// 获取列表数据
export const getBaseTableList = (
  pageNo: number,
  pageSize: number,
  name = ''
): Promise<any> =>
  axios.get(`/table/getBaseTableList?pageNo=${pageNo}&pageSize=${pageSize}&name=${name}`);

export const getQueryTableList = (
  pageNo: number,
  pageSize: number,
  name = ''
): Promise<any> =>
  axios.get(
    `/table/getQueryTableList?pageNo=${pageNo}&pageSize=${pageSize}&name=${name}`
  );
