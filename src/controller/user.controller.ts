import { Controller, Get } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from 'src/entity/user.entity';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/findAll')
  async findAll(): Promise<User[]> {
    const resp = await this.userService.findAll();
    console.log(resp, 'xxx');
    return await this.userService.findAll();
  }
}
