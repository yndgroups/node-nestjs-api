import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  /* getUser(): User {
    const user: User = {
      userId: '1',
      realName: '张三',
      birthday: new Date(),
      mobie: '12345678901',
      wechat: '12345678901',
      email: '12345678901@qq.com',
      education: '本科',
      liveAddress: '北京',
      nativePlace: '北京',
      introduction: '我是一个程序员',
      delStatus: 0,
      createBy: 1,
      createTime: new Date(),
      updateBy: 1,
      updateTime: new Date(),
    };
    return user;
  } */
}
