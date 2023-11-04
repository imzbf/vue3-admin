import axios from '@/utils/request';

export const queryTable = (params: any): Promise<ResponseBase<any>> =>
  axios.get('/table', { params });
