import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 't_user' })
export class User {
  // 主键
  @PrimaryGeneratedColumn({ name: 'user_id' })
  userId: number;

  // 真实姓名
  @Column({ name: 'real_name' })
  @IsNotEmpty()
  realName: string;

  // 生日
  @Column({ name: 'birthday' })
  birthday: Date;

  // 手机号
  @Column({ name: 'mobie' })
  mobie: string;

  // 微信
  @Column({ name: 'wechat' })
  wechat: string;

  // 邮箱
  @Column({ name: 'email' })
  email: string;

  // 学历
  @Column({ name: 'education' })
  education: string;

  // 居住地
  @Column({ name: 'live_address' })
  liveAddress: string;

  // 籍贯
  @Column({ name: 'native_place' })
  nativePlace: string;

  // 自我介绍
  @Column({ name: 'introduction' })
  introduction: string;

  // 创建者
  @Column({ name: 'create_by' })
  createBy: number;

  // 更新者
  @Column({ name: 'update_by' })
  updateBy: number;

  // 创建时间
  @Column({ name: 'create_time' })
  createTime: Date;

  // 更新时间
  @Column({ name: 'update_time' })
  updateTime: Date;

  // 删除状态
  @Column({ name: 'del_status' })
  delStatus: number;
}
