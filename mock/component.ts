import { MockMethod } from 'vite-plugin-mock';
import fs from 'fs';
import path from 'path';
import multiparty from 'multiparty';

const LOCAL_File_PATH = path.resolve(__dirname, '../upload.local');

const component: Array<MockMethod> = [
  {
    url: '/api/upload/chunk',
    method: 'post',
    rawResponse(req, res) {
      if (!fs.existsSync(LOCAL_File_PATH)) {
        fs.mkdirSync(LOCAL_File_PATH);
      }

      const form = new multiparty.Form({
        uploadDir: LOCAL_File_PATH
      });

      form.parse(req, () => {
        res.end(
          JSON.stringify({
            code: 0
          })
        );
      });

      res.end(
        JSON.stringify({
          code: 0
        })
      );
    }
  }
];

export default component;
