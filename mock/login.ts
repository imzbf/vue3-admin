import { MockMethod } from 'vite-plugin-mock';

const login: Array<MockMethod> = [
  {
    url: '/api/token',
    method: 'get',
    response: (): any => {
      return {
        code: 0,
        data: {
          name: 'vben'
        }
      };
    }
  },
  {
    url: '/api/login',
    method: 'post',
    timeout: 1500,
    response: {
      code: 0,
      data: {
        info: {
          username: 'zbfget',
          avatar: '/static/img/head02.gif'
        },
        token: 'nSoCWuIpVU1ZWqkaM1TT5MBwYNfyaqhh5BRQQ9Aw'
      }
    }
  },
  {
    url: '/api/logout',
    method: 'post',
    timeout: 1500,
    response: {
      code: 0,
      data: {}
    }
  }
];

export default login;
