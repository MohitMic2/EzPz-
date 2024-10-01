import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultService } from './result.service';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('result')
@ApiTags('result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Post('create-result')
  create(@Body() createResultDto: CreateResultDto) {
    return this.resultService.create(createResultDto);
  }

  @Get('get-All')
  findAll() {
    return this.resultService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: string) {
    return this.resultService.findOne(+id);
  }


  @Get('delete/:id')
  remove(@Param('id') id: string) {
    return this.resultService.remove(+id);
  }
}
