import { Injectable } from '@nestjs/common';
import { CreateQuizByAnswerDto } from './dto/create-quiz-by-answer.dto';
import { UpdateQuizByAnswerDto } from './dto/update-quiz-by-answer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WriteResponse } from 'src/shared/response';
import { QuizByAnswer } from './entities/quiz-by-answer.entity';

@Injectable()
export class QuizByAnswerService {
constructor(
  @InjectRepository(QuizByAnswer)
  private readonly QuizByAnswerRepository: Repository<QuizByAnswer>,

  ){}

  //Post and Update
  async create(createQuizByAnswerDto: CreateQuizByAnswerDto){
    try {
      if (createQuizByAnswerDto.id == 0){
        await this.QuizByAnswerRepository.save(createQuizByAnswerDto);
        return WriteResponse(200, true, 'QuizByAnswer Create Seccessfully');
      } else{
        await this.QuizByAnswerRepository.save(createQuizByAnswerDto);
        return WriteResponse(200,true, 'QuizByAnswer Update Successfully');
      }
    }catch (e){
      return WriteResponse(400,false, e.message);
    }
  }
//GetAll
  async findAll() {
    const QuizByAnswer = await this.QuizByAnswerRepository.find({
      where: { isDeleted: false},
    });
    if(QuizByAnswer){
      return WriteResponse(
        200, QuizByAnswer, 'QuizByAnswer Found Successfully.'
      );
    }
    return WriteResponse(404, false, 'QuizByAnswer Not Found.');
    //return this.QuizByAnswerRepository.find();
  }

//getOne
async findOne(id:number){
  const QuizByAnswer = await this.QuizByAnswerRepository.findOne({
    where:{ isDeleted: false, id:id },
  });
  if(QuizByAnswer){
    return WriteResponse(200, QuizByAnswer, 'QuizByAnswer Found Successfully.');
  }
  return WriteResponse(404, QuizByAnswer, 'QuizByAnswer Not Found.');
}


  //update(id: number, updateQuizByAnswerDto: UpdateQuizByAnswerDto) {
  //  return `This action updates a #${id} quizByAnswer`;
  //}

  //Delete
  async remove (id: number) {
    const QuizByAnswer = await this.QuizByAnswerRepository.delete({
 id: id, isDeleted: false
    });
    if(QuizByAnswer.affected == 0){
      return WriteResponse(400, false, 'QuizByAnswer Not found.');
    }
    return WriteResponse(200, true, 'QuizByAnswer Deleted Successfully.');
  }

  async GetNextQuizData(id : number ){
   
  }
}
