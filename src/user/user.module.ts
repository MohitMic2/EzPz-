import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]),JwtModule.register({
    global: true,
    secret: "SECRET",
    signOptions: { expiresIn: '6000000s' },
  })],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserModule]

})
export class UserModule {}
