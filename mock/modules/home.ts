import { MockApi } from '../type';

const home: Array<MockApi> = [
  {
    url: '/get',
    method: 'get',
    data: ({ headers }) => {
      console.log(headers);

      return {
        code: 0,
        data: {
          name: 'v3'
        }
      };
    }
  },
  {
    url: '/post',
    method: 'post',
    data: {
      code: 0,
      data: {
        name: 'v3'
      }
    }
  }
];

export default home;
