import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Answer } from './entities/answer.entity';
import { AnswerController } from './answer.controller';
import { AnswerService } from './answer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Answer])],
  controllers: [AnswerController],
  providers: [AnswerService],
})
export class AnswerModule {}
