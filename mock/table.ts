import { MockMethod } from 'vite-plugin-mock';

// 标准表格
const table: Array<MockMethod> = [
  {
    url: '/api/table',
    method: 'get',
    response({ query }) {
      const { page, limit } = query;

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
