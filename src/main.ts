import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { logger } from './middleware/logger.middleware';
import createApiDoc from './config/api.docs';
async function bootstrap() {
  // 创建服务实例
  const app = await NestFactory.create(AppModule);
  // 全局中间件
  app.use(logger);
  createApiDoc(app);
  // 启动服务
  await app.listen(3000);
}
bootstrap();
