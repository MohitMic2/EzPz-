import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuizByAnswerService } from './quiz-by-answer.service';
import { CreateQuizByAnswerDto } from './dto/create-quiz-by-answer.dto';
import { UpdateQuizByAnswerDto } from './dto/update-quiz-by-answer.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('quiz-by-answer')
@ApiTags('quiz-by-answer')
export class QuizByAnswerController {
  constructor(private readonly quizByAnswerService: QuizByAnswerService) {}

  @Post('create-quiz-answer')
  create(@Body() createQuizByAnswerDto: CreateQuizByAnswerDto) {
    return this.quizByAnswerService.create(createQuizByAnswerDto);
  }

  @Get('getAll')
  findAll() {
    return this.quizByAnswerService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: string) {
    return this.quizByAnswerService.findOne(+id);
  }

  //@Patch(':id')
  //update(@Param('id') id: string, @Body() updateQuizByAnswerDto: UpdateQuizByAnswerDto) {
  //  return this.quizByAnswerService.update(+id, updateQuizByAnswerDto);
  //}

  @Get('delete/:id')
  remove(@Param('id') id: string) {
    return this.quizByAnswerService.remove(+id);
  }

  @Get('GetNextQuiz/:id')
  GetNextQuiz(@Param('id') id : string ){
    return this.quizByAnswerService.GetNextQuizData(+id)
  }
}
