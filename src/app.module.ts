import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { CountryModule } from './country/country.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { Country } from './country/entities/country.entity';
import { City } from './city/entities/city.entity';
import { State } from './state/entities/state.entity';

import { ChatModule } from './chatgpt/chat.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswerModule } from './answer/answer.module';
import { UserAtempQuesModule } from './user-atemp-ques/user-atemp-ques.module';
import { UserAtempQue } from './user-atemp-ques/entities/user-atemp-que.entity';
import { QuizByAnswerModule } from './quiz-by-answer/quiz-by-answer.module';
import { ResultModule } from './result/result.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '103.195.4.8',
      port: 3306,
      username: 'ezpz',
      password: 'esh@len$1',
      database: 'admin_ezpz',
      //entities: [User,Country,City,State],
      entities: [__dirname + '/**/*.entity{.ts,.js}',User,Country,City,State,UserAtempQue],
      synchronize: false,
      autoLoadEntities:true,
    }),
    MailerModule.forRoot({
      transport: {
        // host: 'smtp.mailtrap.io',
         host: 'smtp.gmail.com',
        //host: 'localhost',

        // port: 465,
        // service: 'gmail',
        port: 587,
        ignoreTLS: true,
        secure: process.env.MAIL_SECURE || false,
        service: 'Gmail',

        auth: {
          user: 'strangerpart128@gmail.com',
          pass: 'nexgypqvrzkvmmmh',// App Password creating in gmail id

        },

      },
      defaults: {
        from: process.env.MAIL_FROM || '"No Reply" <no-reply@localhost>',
      },
    }),


    UserModule,
    AuthModule,
    CountryModule,
    StateModule,
    CityModule,
    ChatModule,
    QuestionsModule,
    AnswerModule,
    UserAtempQuesModule,
    QuizByAnswerModule,
    ResultModule,
  ],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
