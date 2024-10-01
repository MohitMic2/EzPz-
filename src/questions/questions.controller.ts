import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateQuestionDto } from './dto/questions.dto';
import { QuestionsService } from './questions.service';

@Controller('questions')
@ApiTags('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post('create-question')
  create(@Body() createQuestionsDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionsDto);
  }

  @Get('get-All')
  findAll() {
    return this.questionsService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: string) {
    return this.questionsService.findOneQuestionData(+id);
  }

  @Get('delete/:id')
  remove(@Param('id') id: string) {
    return this.questionsService.remove(+id);
  }
}
