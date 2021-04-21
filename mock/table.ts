import { MockMethod } from 'vite-plugin-mock';
import * as Mock from 'mockjs';
// 远程图片地址
const REMOTE_IMAGES_ADDRESS = 'https://cqorccmm.cn/imgs/headers/webp/';
Mock.Random.extend({
  constellation: function () {
    const size = 16;
    const constellations = [];
    for (let i = 1; i <= size; i++) {
      constellations.push(`head${i}.webp`);
    }
    return this.pick(constellations);
  }
});
// 测试数据生成器
const mockExp = [
  {
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    name: '@cname',
    owner: '@cname',
    publishTime: '@datetime("yyyy-MM-dd HH:mm")',
    'rate|0-100': 1,
    content: '@cparagraph(1 , 2)',
    statu: '@boolean',
    url: `${REMOTE_IMAGES_ADDRESS}@constellation`
  }
];

// 标准表格
const table: Array<MockMethod> = [
  {
    url: '/table/statusRadio',
    method: 'get',
    response: (): any => {
      return {
        code: 0,
        data: []
      };
    }
  },
  {
    url: '/table/getBaseTableList',
    method: 'get',
    response: ({ query }): any => {
      // 待优化
      const { pageNo, pageSize } = query;
      // 假设有这么多页
      const total = 96;
      let data = [];
      const pages = pageSize * pageNo;
      if (pages <= total) {
        let size = total % pageSize;
        if (pages <= total - pageSize) {
          size = pageSize;
        }
        if (Number(pageSize) === 1) {
          size = 1;
        }
        const obj = {};
        const key = `list|${size}`;
        obj[key] = mockExp;
        const res = Mock.mock(obj);
        data = res.list;
      } else if (pages - total > pages) {
        data = [];
      } else {
        const size = total % pageSize;
        const key = `list|${size}`;
        const obj = {};
        obj[key] = mockExp;
        const res = Mock.mock(obj);
        data = res.list;
      }

      return {
        records: data || [],
        total: total
      };
    }
  },
  {
    url: '/table/getQueryTableList',
    method: 'get',
    response: ({ query }) => {
      // 待优化
      const { pageNo, pageSize } = query;
      // 假设有这么多页
      const total = 96;
      let data = [];
      const pages = pageSize * pageNo;
      if (pages <= total) {
        let size = total % pageSize;
        if (pages <= total - pageSize) {
          size = pageSize;
        }
        if (Number(pageSize) === 1) {
          size = 1;
        }
        const obj = {};
        const key = `list|${size}`;
        obj[key] = mockExp;
        const res = Mock.mock(obj);
        data = res.list;
      } else if (pages - total > pages) {
        data = [];
      } else {
        const size = total % pageSize;
        const key = `list|${size}`;
        const obj = {};
        obj[key] = mockExp;
        const res = Mock.mock(obj);
        data = res.list;
      }

      return {
        records: data || [],
        total: total
      };
    }
  }
];

export default table;
