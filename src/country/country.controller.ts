import { Country } from './entities/country.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('country')
@ApiTags('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  //@Post()
  //async saveCountry(@Req() req, @Body('country') countryName: string) {
  //  const { id } = req.country;
  //  return this.countryService.saveCountry(id, countryName);
  //}



  @Post('GetCountry')
  @ApiBody({})
  GetCountry(@Body() CountryName : any){
    return this.countryService.GetCountry(CountryName);
  }

  @Post('GetState')
  @ApiBody({})
  GetState(@Body() StateName : any ){
    return this.countryService.GetState(StateName);
  }

  @Post('GetCity')
  @ApiBody({})
  GetCity(@Body() cityName : any ){
    return this.countryService.GetCity(cityName);
  }

  @Get('getAll')
  findAll() {
    return this.countryService.findAll();
  }


  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.countryService.findOne(+id);
  }


  @Get('delete/:id')
  remove(@Param('id') id: string) {
    return this.countryService.remove(+id);
  }
}
