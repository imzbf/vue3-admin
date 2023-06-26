import { IncomingMessage, ServerResponse } from 'http';

interface ReturnType {
  code: number;
  msg?: string | null;
  data?: any;
}

type HandleFunction = (
  req: IncomingMessage,
  res: ServerResponse,
  body: any,
  query: any
) => ReturnType | Promise<ReturnType>;

// 接口对象，为配合之前MockJS规范，定义该接口
export interface MockApi {
  url: string | RegExp;
  method: 'get' | 'post' | 'put' | 'delete';
  data: ReturnType | HandleFunction;
  description?: string;
}
