import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';

describe('UserController', () => {
  let appController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();
    appController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return user[]', () => {
      expect(appController.findAll()).toBe([]);
    });
  });
});
