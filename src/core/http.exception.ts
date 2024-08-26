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
    const resp = {
      code: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      errMsg: exception.message,
    };
    // 异常日志可以在在此记录到日志采集器
    // console.log(resp, 'exception');
    response.status(status).json(resp);
  }
}
