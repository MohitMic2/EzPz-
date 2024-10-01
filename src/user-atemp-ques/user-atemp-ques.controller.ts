import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserAtempQuesService } from './user-atemp-ques.service';
import { CreateUserAtempQueDto } from './dto/create-user-atemp-que.dto';
import { UpdateUserAtempQueDto } from './dto/update-user-atemp-que.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('user-atemp-ques')
@ApiTags('user-atemp-ques')
export class UserAtempQuesController {
  constructor(private readonly userAtempQuesService: UserAtempQuesService) {}

  @Post('/create-or-update')
  create(@Body() createUserAtempQueDto: CreateUserAtempQueDto) {
    return this.userAtempQuesService.create(createUserAtempQueDto);
  }

  @Get('/get-All')
  findAll() {
    return this.userAtempQuesService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: string) {
    return this.userAtempQuesService.findOne(+id);
  }



  @Get('delete/:id')
  remove(@Param('id') id: string) {
    return this.userAtempQuesService.remove(+id);
  }
}
