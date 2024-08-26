export class Resp<T> {
  code: number;
  msg: string;
  data?: T;
  errMsg?: string;

  constructor(code: number, msg: string, data?: T, errMsg?: string) {
    this.code = code;
    this.msg = msg;
    this.data = data;
    this.errMsg = errMsg;
  }

  static success(data?: any): Resp<any> {
    return new Resp(1, 'request success', data);
  }

  static fail(msg: string): Resp<any> {
    return new Resp(1, msg);
  }
}
