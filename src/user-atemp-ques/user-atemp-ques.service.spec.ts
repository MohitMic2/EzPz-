import { Test, TestingModule } from '@nestjs/testing';
import { UserAtempQuesService } from './user-atemp-ques.service';

describe('UserAtempQuesService', () => {
  let service: UserAtempQuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAtempQuesService],
    }).compile();

    service = module.get<UserAtempQuesService>(UserAtempQuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
