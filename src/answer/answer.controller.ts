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
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/answer.dto';

@Controller('answer')
@ApiTags('answer')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post('create-answer')
  create(@Body() createAnswerDto: CreateAnswerDto) {
    return this.answerService.create(createAnswerDto);
  }

  @Get('get-All')
  findAll() {
    return this.answerService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: string) {
    return this.answerService.findOne(+id);
  }

  @Get('delete/:id')
  remove(@Param('id') id: string) {
    return this.answerService.remove(+id);
  }
}
