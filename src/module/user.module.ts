import { Module } from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // 注入User实体类
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
