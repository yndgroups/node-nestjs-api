import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from 'src/entity/user.entity';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('用户接口')
@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 查询所有数据
  @ApiOperation({
    summary: '查询所有数据',
    description: '获取全部数据',
  })
  @Get('/findAll')
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  // 根据id查询详情
  @ApiParam({
    name: 'id',
    description: '根据id获取详情',
    required: true,
  })
  @Get('/findById/:id')
  async findById(@Param('id') id: string): Promise<User> {
    return await this.userService.findById(id);
  }
}
