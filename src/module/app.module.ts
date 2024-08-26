import { Module } from '@nestjs/common';
// import { AppController } from '../controller/app.controller';
// import { UserController } from '../controller/user.controller';

// import { AppService } from '../service/app.service';
// import { UserService } from '../service/user.service';

import { dbConfig } from '../config/db.config';
import { UserModule } from './user.module';

@Module({
  imports: [dbConfig, UserModule],
  // controllers: [AppController, UserController],
  // providers: [AppService, UserService],
})
export class AppModule {}
