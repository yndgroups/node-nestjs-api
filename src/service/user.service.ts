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

  // 查询所有数据
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // 根据ID查询详情
  async findById(userId: string): Promise<User> {
    return await this.userRepository.findOneBy({ userId });
  }
}
