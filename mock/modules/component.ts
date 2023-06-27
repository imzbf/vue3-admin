import fs from 'fs';
import path from 'path';
import multiparty from 'multiparty';
import { MockApi } from '../type';

const LOCAL_File_PATH = path.resolve(__dirname, '../upload.local');

const component: Array<MockApi> = [
  {
    url: '/upload/chunk',
    method: 'post',
    data(req) {
      if (!fs.existsSync(LOCAL_File_PATH)) {
        fs.mkdirSync(LOCAL_File_PATH);
      }

      const form = new multiparty.Form({
        uploadDir: LOCAL_File_PATH
      });

      form.parse(req);

      return {
        code: 0
      };
    }
  }
];

export default component;
