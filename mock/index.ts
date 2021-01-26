import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      console.log(query);

      return {
        code: 0,
        data: {
          name: 'vben'
        }
      };
    }
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben'
      }
    }
  }
] as MockMethod[];
