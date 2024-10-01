import { Test, TestingModule } from '@nestjs/testing';
import { QuizByAnswerService } from './quiz-by-answer.service';

describe('QuizByAnswerService', () => {
  let service: QuizByAnswerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizByAnswerService],
    }).compile();

    service = module.get<QuizByAnswerService>(QuizByAnswerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
