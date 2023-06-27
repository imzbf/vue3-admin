import Mock from 'mockjs';
import { searchToObj } from '@vavt/util';
import { Plugin } from 'vite';
import apis from './modules';

export const API_PREFIX = '/api';

export default (): Plugin => ({
  name: 'api-mock',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      // 预先设置，允许运行api方法时重设
      res.setHeader('Content-Type', 'application/json; charset=utf-8');

      let respData = null;

      for await (const item of apis) {
        if (
          req.url &&
          new RegExp(
            item.url instanceof RegExp
              ? `${API_PREFIX}${item.url.source}`
              : `${API_PREFIX}${item.url}`,
            'gi'
          ).test(req.url) &&
          req.method === item.method.toLocaleUpperCase()
        ) {
          const url = new URL(req.url || '', `http://${req.headers.host}`);
          const query = searchToObj(url.search);
          const body = await new Promise((rev) => {
            let bodyStr = '';
            req.on('data', (chunk) => {
              bodyStr += chunk;
            });

            req.on('end', () => {
              if (bodyStr) {
                rev(JSON.parse(bodyStr));
              } else {
                rev({});
              }
            });
          });

          let dataTemplate = item.data;
          if (item.data instanceof Function) {
            dataTemplate = await item.data(req, res, body, query);
          }

          respData = Mock.mock(dataTemplate);

          break;
        }
      }

      if (respData === null) {
        next();
      } else {
        res.end(JSON.stringify(respData));
      }
    });
  }
});
