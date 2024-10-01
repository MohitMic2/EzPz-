import { Module } from '@nestjs/common';
import { QuizByAnswerService } from './quiz-by-answer.service';
import { QuizByAnswerController } from './quiz-by-answer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizByAnswer } from './entities/quiz-by-answer.entity';

@Module({
  imports:[ TypeOrmModule.forFeature([QuizByAnswer])],
  controllers: [QuizByAnswerController],
  providers: [QuizByAnswerService]
})
export class QuizByAnswerModule {}
