export {};

declare global {
  interface ResponseBase<T> {
    code: number;
    data: T;
    msg: string;
  }
}
