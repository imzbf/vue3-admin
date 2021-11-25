import axios from '@/utils/request';

export interface LoginInfoType {
  username: string;
  password: string;
  remembered?: boolean;
}

// 登出
export const logout = (): Promise<any> => axios.post('logout');
// 登录
export const login = (data: LoginInfoType): Promise<any> => axios.post('login', data);
// 获取信息
export const getUseInfo = (): Promise<any> => axios.get('user');
