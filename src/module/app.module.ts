import { Module } from '@nestjs/common';
// import { AppController } from '../controller/app.controller';
// import { UserController } from '../controller/user.controller';

// import { AppService } from '../service/app.service';
// import { UserService } from '../service/user.service';

import { dbConfig } from '../config/db.config';
import { UserModule } from './user.module';

import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from 'src/core/http.exception';
import { AppController } from 'src/controller/app.controller';
import { AppService } from 'src/service/app.service';

@Module({
  imports: [dbConfig, UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
