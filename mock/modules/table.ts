import { MockApi } from '../type';

// 标准表格
const table: Array<MockApi> = [
  {
    url: '/table',
    method: 'get',
    data(req) {
      const url = new URL(req.url || '', `http://${req.headers.host}`);
      const page = url.searchParams.get('page');
      const limit = url.searchParams.get('limit');

      return {
        code: 0,
        data: {
          total: 96,
          limit,
          page,
          'list|10': [
            {
              'id|+1': 1,
              title: '@title',
              synopsis: '@cparagraph',
              code: '@word(8)',
              hits: '@integer(0,10000)',
              createdTime: '@date("yyyy-MM-dd HH:mm:ss")',
              updatedTime: '@date("yyyy-MM-dd HH:mm:ss")',
              status: '@integer(0,1)'
            }
          ]
        }
      };
    }
  }
];

export default table;
