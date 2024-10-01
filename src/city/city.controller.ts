import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { IPagination, IPaginationSwagger } from 'src/shared/paginationEum';

@Controller('city')
@ApiTags('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post('/create-or-update')
  create(@Body() createCityDto: CreateCityDto) {
    return this.cityService.create(createCityDto);
  }


  @Get('/getAll')
  findAll() {
    return this.cityService.findAll();
  }

  @Get('getCitybyStateid/:id')
  findOne(@Param('id') id: string) {
    return this.cityService.findOne(+id);
  }

//  @Patch(':id')
//  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
//    return this.cityService.update(+id, updateCityDto);
//  }

  @Get('/delete/:id')
  remove(@Param('id') id: string) {
    return this.cityService.remove(+id);
  }
//
//  @Post('pagination')
//  @ApiBody({ schema: { properties: IPaginationSwagger}})
//  async pagination(@Body() pagination: IPagination) {
//    return await this.cityService.pagination(pagination);
//  }
}
