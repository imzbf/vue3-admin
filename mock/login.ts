import { MockMethod } from 'vite-plugin-mock';

export const ADMIN_TOKEN = 'nSoCWuIpVU1ZWqkaM1TT5MBwYNfyaqhh5BRQQ9Aw';
export const USER_TOKEN = 'mCLAG37cjq7eepKAZkAP1Ri63fHheh1qHn7di8BX';

const user: Array<MockMethod> = [
  {
    url: '/api/user',
    method: 'get',
    response: ({ headers }): any => {
      return {
        code: 0,
        data: {
          username: headers.token === ADMIN_TOKEN ? '管理员' : '普通用户',
          avatar: '/static/img/head02.gif'
        }
      };
    }
  },
  {
    url: '/api/user/menu',
    method: 'get',
    response: ({ header }): any => {
      return {
        code: 0,
        data: {
          username: 'zbf',
          avatar: '/static/img/head02.gif'
        }
      };
    }
  }
];

const login: Array<MockMethod> = [
  {
    url: '/api/login',
    timeout: 1000,
    method: 'post',
    response({ body }) {
      return {
        code: 0,
        data: {
          token: body?.username === 'admin' ? ADMIN_TOKEN : USER_TOKEN
        }
      };
    }
  },
  {
    url: '/api/logout',
    method: 'post',
    response: {
      code: 0,
      data: {}
    }
  }
];

export default [...login, ...user];
