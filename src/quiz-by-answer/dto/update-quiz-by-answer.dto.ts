import { PartialType } from '@nestjs/swagger';
import { CreateQuizByAnswerDto } from './create-quiz-by-answer.dto';

export class UpdateQuizByAnswerDto extends PartialType(CreateQuizByAnswerDto) {}
