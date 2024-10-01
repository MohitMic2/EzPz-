import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WriteResponse } from 'src/shared/response';
import axios from 'axios';
@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
    ) {}

//Post and Update Country
async create(createCountryDto: CreateCountryDto) {
  try {

    if (createCountryDto.id == 0) {
      await this.countryRepository.save(createCountryDto);
      return WriteResponse(200, true, 'Country Created Successfully.');
    } else {
      await this.countryRepository.save(createCountryDto);
      return WriteResponse(200, true, 'Country updated successfully.');
    }
  } catch (e) {
    return WriteResponse(400, false, e.message);
  }
}

  async GetCountry(data : any ){
  try {
    let responseData = await this.countryRepository.find()
    return WriteResponse(200 , responseData , "success")
  }catch(err){
    console.log(err)
    return WriteResponse(400 , false , err.message)
  }
  }

   async GetState(data : any ){
    try {
      let url = `https://www.universal-tutorial.com/api/states/${data.StateName}`
    let header = {
      "Authorization": `Bearer ${data.Token}`,
      "Accept": "application/json"
    }
    const response = await axios.get(url, { headers : header });
    const responseData = response.data; // Extract the desired data from the response
    return WriteResponse(200 , responseData , "success")

    }catch(err){
      return WriteResponse(400 , false , err.message)
    }
   }

   async GetCity(data : any ){
    try {
      let url = `https://www.universal-tutorial.com/api/cities/${data.cityName}`
    let header = {
      "Authorization":  `Bearer ${data.Token}`,
      "Accept": "application/json"
    }
    const response = await axios.get(url, { headers : header });
    const responseData = response.data; // Extract the desired data from the response
    return WriteResponse(200 , responseData , "success")

    }catch(err){
      return WriteResponse(400 , false , err.message)
    }  
   }
    //Getall
  async findAll() {
    const Country = await this.countryRepository.find({
      where: { isDeleted: false },
    });
    if (Country) {
      const count = Country.length;
      return WriteResponse(
        200,
        Country,
        'Country Found Successfully',
      );
    }
    return WriteResponse(404, false, 'Country not found.');
  }

  //getOne
  async findOne(id: number) {
    const Country = await this.countryRepository.findOne({
      where: { isDeleted: false, id: id },
    });
    if (Country) {
      return WriteResponse(200, Country, 'Country found successfully.');
    }
    return WriteResponse(404, false, 'Country not found.');
  }

  //update(id: number, updateCountryDto: UpdateCountryDto) {
  //  return `This action updates a #${id} country`;
  //}

  //Delete
  async remove(id: number) {
    const Country = await this.countryRepository.delete({ id: id, isDeleted: false });

    if (Country.affected == 0) {
      return WriteResponse(400, false, 'Country not found');
    }
    return WriteResponse(200, true, 'Country deleted successfully.');
  }
}
