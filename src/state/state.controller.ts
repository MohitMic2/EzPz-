import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StateService } from './state.service';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('state')
@ApiTags('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}


  @Post('/create-or-update')
  create(@Body() createStateDto: CreateStateDto){
    return this.stateService.create(createStateDto);
  }

  @Get('/getAll')
  findAll() {
    return this.stateService.findAll();
  }

  @Get('getStatebyCountry/:id')
  findOne(@Param('id') id: string) {
    return this.stateService.findOne(+id);
  }


  @Get('/delete/:id')
  remove(@Param('id') id: string) {
    return this.stateService.remove(+id);
  }
}
