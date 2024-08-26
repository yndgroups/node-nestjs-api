import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getException(): string {
    throw new HttpException('测试异常捕获是都是400', 400);
  }
}
