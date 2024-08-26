import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('测试接口')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 开局程序
  @ApiOperation({
    summary: '每一个程序的开始',
    description: 'Hello World',
  })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiOperation({
    summary: '测试异常',
    description: '测试异常捕获是否能够正常',
  })
  @Get('/exception')
  getException(): string {
    return this.appService.getException();
  }
}
