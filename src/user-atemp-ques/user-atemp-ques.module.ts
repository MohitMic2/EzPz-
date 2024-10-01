import { Module } from '@nestjs/common';
import { UserAtempQuesService } from './user-atemp-ques.service';
import { UserAtempQuesController } from './user-atemp-ques.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAtempQue } from './entities/user-atemp-que.entity';
import { Questions } from 'src/questions/entities/questions.entity';
@Module({
  imports: [TypeOrmModule.forFeature([UserAtempQue,Questions])],
  controllers: [UserAtempQuesController],
  providers: [UserAtempQuesService]
})
export class UserAtempQuesModule {}
