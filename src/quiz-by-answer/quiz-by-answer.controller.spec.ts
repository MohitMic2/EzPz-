import { Test, TestingModule } from '@nestjs/testing';
import { QuizByAnswerController } from './quiz-by-answer.controller';
import { QuizByAnswerService } from './quiz-by-answer.service';

describe('QuizByAnswerController', () => {
  let controller: QuizByAnswerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizByAnswerController],
      providers: [QuizByAnswerService],
    }).compile();

    controller = module.get<QuizByAnswerController>(QuizByAnswerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
