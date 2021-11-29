import axios from '@/utils/request';

export const queryTable = (params: any): Promise<any> => axios.get('/table', { params });
