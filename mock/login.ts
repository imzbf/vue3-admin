import { MockMethod } from 'vite-plugin-mock';

const login: Array<MockMethod> = [
  {
    url: '/api/info',
    method: 'get',
    response: (): any => {
      return {
        code: 0,
        data: {
          username: 'zbf',
          avatar: '/static/img/head02.gif'
        }
      };
    }
  },
  {
    url: '/api/login',
    method: 'post',
    response: {
      code: 0,
      data: {
        token: 'nSoCWuIpVU1ZWqkaM1TT5MBwYNfyaqhh5BRQQ9Aw'
      }
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

export default login;
