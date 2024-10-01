import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAnswerDto } from './dto/answer.dto';
import { Answer } from './entities/answer.entity';
import { WriteResponse } from 'src/shared/response';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private readonly answerRepo: Repository<Answer>,
  ) {}

  async create(answer: CreateAnswerDto): Promise<any> {
    const answerD = await this.answerRepo.save(answer);
    return WriteResponse(200,true,"Success")
  }

 async findAll() {
    const list = await this.answerRepo.find({ where : { isDeleted  : false }});
    if(list.length){
       return WriteResponse(200,list,"Success")
    }
    return WriteResponse(400,false,"record not found.")
  }

  async findOne(id: number) {
    const a = await this.answerRepo.findOne({ where: { id } });
    if(a){
       return WriteResponse(200,a,"Success")
    }
    return WriteResponse(400,false,"record not found.")
  }

  remove(id: number) {
    return this.answerRepo.update({ id }, { isDeleted: true });
  }
}
