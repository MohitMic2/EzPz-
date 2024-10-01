import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { UserAtempQue } from 'src/user-atemp-ques/entities/user-atemp-que.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserAtempQue])],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
