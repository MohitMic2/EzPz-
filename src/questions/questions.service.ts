import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Questions } from './entities/questions.entity';
import { CreateQuestionDto } from './dto/questions.dto';
import { WriteResponse } from 'src/shared/response';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Questions)
    private readonly questionRepo: Repository<Questions>,
  ) {}
// Create Question
  async create(question: CreateQuestionDto): Promise<any> {
    const questionD = await this.questionRepo.save(question);
    return WriteResponse(200,questionD,"success")
  }
//GetAll
 async findAll() {
    const quest = await this.questionRepo.find();
    if(quest.length){
        return WriteResponse(200,quest)
    }else{
       return WriteResponse(400,false)
    }
  }

  //getOne Question with Options
  async findOneQuestionData(id: number) {
    const q = await this.questionRepo.findOne({ where: { id } });
    if(q){
      return this.questionRepo.createQueryBuilder('question')
      .leftJoinAndSelect('question.answer', 'answer')
      .where('question.id = :id', { id })
      .getOne();

       return WriteResponse(200,q);
    }else{
       return WriteResponse(400,false)
    }
  }

  async remove(id: number) {
    const isUpdated = await this.questionRepo.update({ id }, { isDeleted: true });
    if(isUpdated.affected == 0){
        return WriteResponse(200,true,"question remove successfully.");
    }else{
       return WriteResponse(400,false,"question remove failed.");
    }
  }
}
