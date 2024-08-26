# 异常处理

## 抛出获器
```
// throw new HttpException('暂未实现', HttpStatus.NOT_IMPLEMENTED);
throw new HttpException(
    '暂未实现',
    HttpStatus.NON_AUTHORITATIVE_INFORMATION,
);
```

## 异常捕获器
```
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    console.log(exception, 'exception');

    response.status(status).json({
      code: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      errMsg: exception.message,
    });
  }
}
```
