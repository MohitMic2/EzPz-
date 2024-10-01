import { CreateAnswerDto } from './../answer/dto/answer.dto';
import { Injectable } from '@nestjs/common';
import { CreateUserAtempQueDto } from './dto/create-user-atemp-que.dto';
import { UpdateUserAtempQueDto } from './dto/update-user-atemp-que.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAtempQue } from './entities/user-atemp-que.entity';
import { WriteResponse } from 'src/shared/response';
import { Questions } from 'src/questions/entities/questions.entity';


@Injectable()
export class UserAtempQuesService {
constructor(
  @InjectRepository(UserAtempQue)
  private readonly UserAtempQueRepository: Repository<UserAtempQue>,
  @InjectRepository(Questions)
  private readonly QuestionsRepo : Repository<Questions>
){}

//Post and Create UserAtempQue
async create (createUserAtempQueDto: CreateUserAtempQueDto){
  try{
    if(createUserAtempQueDto.id == 0){
      let attendQueAns = await this.UserAtempQueRepository.save(createUserAtempQueDto);
      let data = await this.findOneQuestionData(createUserAtempQueDto.nestQuestionId)
      let createUserAtempQueId = attendQueAns.id 
      if(data == null ){
         return WriteResponse( 400 , {createUserAtempQueId : createUserAtempQueId} , "time to submit from here ")
      }
      data['createUserAtempQueId'] = createUserAtempQueId
      return WriteResponse(200 , data  , "success ")
      // return WriteResponse(200, true,'UserAtempQue Created Successfully');
    }else{
      await this.UserAtempQueRepository.save(createUserAtempQueDto);
      let data = await this.findOneQuestionData(createUserAtempQueDto.nestQuestionId)
      if(data == null ){
         return WriteResponse( 400 , false , "time to submit")
      }
      return WriteResponse(200,data,'UserAtempQue Update Successfully')
      //return WriteResponse(200, true,'!!Update NotAllow!!');
    }
  }catch(e){
    return WriteResponse(400, false, e.message);
  }
}

//Next Question Show with Options
async findOneQuestionData(id: number) {
  const q = await this.QuestionsRepo.findOne({ where: { id } });
  if(q){

    return this.QuestionsRepo.createQueryBuilder('question')
    .leftJoinAndSelect('question.answer', 'answer')
    .where('question.id = :id', { id })
    .getOne();
  }else{
     return WriteResponse(400,false)
  }
}

//Getall
async findAll(){
  const UserAtempQue = await this.UserAtempQueRepository.find({
    where: { isDeleted: false },
  });
  if(UserAtempQue) {
    const count = UserAtempQue.length;
    return WriteResponse(
      200,UserAtempQue, 'UserAtempQue Found Successfully'
    );
  }
  return WriteResponse(404, false,'UserAtempQue Not Found');

}

//getOne
async findOne(id: number) {
  const UserAtempQue = await this.UserAtempQueRepository.find({
    where: { isDeleted: false, userId: id},
  });
  if(UserAtempQue){
    return WriteResponse(200, UserAtempQue,'UserAtempQue Found Successfully');
  }
  return WriteResponse(404, false, 'UserAtempQue Not Found');
}

//Delete
async remove(id: number){
  const UserAtempQue = await this.UserAtempQueRepository.delete({ id: id, isDeleted: false });
  if(UserAtempQue.affected == 0 ){
    return WriteResponse(400,false, 'UserAtempQue Not Found');
  }
  return WriteResponse(200,true, 'UserAtempQue Delete Successfully');
}

}
