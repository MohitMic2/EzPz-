import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WriteResponse, paginateResponse } from 'src/shared/response';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
    ) {}
//Post and Update State
async create(createCityDto: CreateCityDto) {
  try {

    if (createCityDto.id == 0) {
      await this.cityRepository.save(createCityDto);
      return WriteResponse(200, true, 'City Created Successfully.');
    } else {
      await this.cityRepository.save(createCityDto);
      return WriteResponse(200, true, 'City updated successfully.');
    }
  } catch (e) {
    return WriteResponse(400, false, e.message);
  }
}

 //Getall
 async findAll() {
  const City = await this.cityRepository.find({
    where: { isDeleted: false },
  });
  if (City.length) {
    return WriteResponse(
      200,
      City,
      'City Found Successfully',
    );
  }
  return WriteResponse(404, false, 'City not found.');
}

  //getOne
async findOne(id: number) {
  const City = await this.cityRepository.find({
    where: { isDeleted: false, stateId: id },
  });
  if (City) {
    return WriteResponse(200, City, 'City found successfully.');
  }
  return WriteResponse(404, City, 'City not found.');
}



  //Delete
  async remove(id: number) {
    const City = await this.cityRepository.update({ id: id },{isDeleted: true});

    if (City.affected == 0) {
      return WriteResponse(400, false, 'City not found');
    }
    return WriteResponse(200, true, 'City deleted successfully.');
  }

//  async pagination(pagination){
//    const { curPage, perPage } = pagination;
//    const skip = (curPage - 1) * perPage;
//    let where = `f.isDeleted = false`;
//
//    const all = await pagination.whereClause?.find(
//      (i) => i.key == 'all' && i.value,
//    );
//
//
//    let [list,count] = await this.cityRepository
//    .createQueryBuilder("f")
//    .leftJoinAndSelect("f.state",'state')
//    .leftJoinAndSelect("f.country",'country')
//    .where(where)
//    .skip(skip)
//    .take(perPage)
//    .getManyAndCount();
//
//    return paginateResponse(list,count);
//  }

}
