import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
export const dbConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'Ynd@2025',
  database: 'job_hunt',
  entities: [User], //[__dirname + '/**/*.entity{.ts,.js}'], // [], //
  synchronize: false,
});
