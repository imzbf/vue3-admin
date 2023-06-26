import { MockApi } from '../type';

export const ADMIN_TOKEN = 'nSoCWuIpVU1ZWqkaM1TT5MBwYNfyaqhh5BRQQ9Aw';
export const USER_TOKEN = 'mCLAG37cjq7eepKAZkAP1Ri63fHheh1qHn7di8BX';

interface LoginBody {
  username: string;
  password: string;
}

const login: Array<MockApi> = [
  {
    url: '/login',
    method: 'post',
    data(_req, _res, body: LoginBody) {
      return {
        code: 0,
        data: {
          token: body?.username === 'admin' ? ADMIN_TOKEN : USER_TOKEN
        }
      };
    }
  },
  {
    url: '/logout',
    method: 'post',
    data: {
      code: 0,
      data: {}
    }
  }
];

export default login;
