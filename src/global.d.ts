// 接口返回的数据结构
interface ResponseBase<T> {
  code: number;
  data: T;
  msg: string;
}
