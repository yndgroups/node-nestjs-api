import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Resp } from '../core/http.response';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // 查询所有数据
  async findAll(): Promise<Resp<User[]>> {
    return Resp.success(await this.userRepository.find());
  }

  // 根据ID查询详情
  async findById(userId: string): Promise<Resp<User>> {
    return Resp.success(await this.userRepository.findOneBy({ userId }));
  }
}
