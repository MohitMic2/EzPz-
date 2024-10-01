import { Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { State } from './entities/state.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WriteResponse } from 'src/shared/response';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>,
    ) {}
//Post and Update State
async create(createStateDto: CreateStateDto) {
  try {

    if (createStateDto.id == 0) {
      await this.stateRepository.save(createStateDto);
      return WriteResponse(200, true, 'State Created Successfully.');
    } else {
      await this.stateRepository.save(createStateDto);
      return WriteResponse(200, true, 'State updated successfully.');
    }
  } catch (e) {
    return WriteResponse(400, false, e.message);
  }
}


    //Getall
    async findAll() {
      const State = await this.stateRepository.find({
        where: { isDeleted: false },
      });
      if (State.length) {
        return WriteResponse(
          200,
          State,
          'State Found Successfully',
        );
      }
      return WriteResponse(404, false, 'State not found.');
    }


//getOne
async findOne(id: number) {
  const State = await this.stateRepository.find({
    where: { isDeleted: false, countryId: id },
  });
  if (State) {
    return WriteResponse(200, State, 'State found successfully.');
  }
  return WriteResponse(404, false, 'State not found.');
}



  //Delete
  async remove(id: number) {
    const State = await this.stateRepository.update({ id:id} ,{isDeleted: true});

    if (State.affected == 0) {
      return WriteResponse(400, false, 'State not found');
    }
    return WriteResponse(200, true, 'State deleted successfully.');
  }
}
