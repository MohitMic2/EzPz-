import { Injectable } from '@nestjs/common';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Result } from './entities/result.entity';
import { Repository } from 'typeorm';
import { WriteResponse } from 'src/shared/response';

@Injectable()
export class ResultService {
constructor(
  @InjectRepository(Result)
  private readonly resultRepository: Repository<Result>,
){}
//Post Result
async create (createResultDto:CreateResultDto){
  try{
    if(createResultDto.id == 0){
await this.resultRepository.save(createResultDto);
return  WriteResponse(200, true , 'Result Create Successfully.');
    }
    else {
     await this.resultRepository.save(createResultDto);
     return WriteResponse(200, true, 'State updated successfully.');
    }
  }catch(e){
      return WriteResponse(400, false, e.message);
    }
  }


  async findAll() {
    const Result = await this.resultRepository.find({
      where: { isDeleted: false },
    });
    if(Result){
      return WriteResponse(200, Result, 'Result Found Seccessfully.');
    }
    return WriteResponse(404, false, 'Result Not Found');
    //return this.resultRepository.find();
  }
//GetOne
  async findOne(id: number) {
    const Result = await this.resultRepository.findOne({
      where : { isDeleted: false, id: id},
    });
    if(Result){
      return WriteResponse(200, Result, 'Result Found Successfully.');
    }
    return WriteResponse(404,false, 'Result Not Found.');
  }

//Delete
  async remove(id: number) {
    const Result = await this.resultRepository.update({ id:id} ,{isDeleted: true});
if(Result.affected == 0){
  return WriteResponse(400, false,'Result Not Foiund.');
}
return WriteResponse(200, true, 'Result Deleted Successfully')
  }
}
