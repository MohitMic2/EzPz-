import { Test, TestingModule } from '@nestjs/testing';
import { UserAtempQuesController } from './user-atemp-ques.controller';
import { UserAtempQuesService } from './user-atemp-ques.service';

describe('UserAtempQuesController', () => {
  let controller: UserAtempQuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAtempQuesController],
      providers: [UserAtempQuesService],
    }).compile();

    controller = module.get<UserAtempQuesController>(UserAtempQuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
