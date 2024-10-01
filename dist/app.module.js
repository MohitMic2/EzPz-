"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user/entities/user.entity");
const auth_module_1 = require("./auth/auth.module");
const country_module_1 = require("./country/country.module");
const state_module_1 = require("./state/state.module");
const city_module_1 = require("./city/city.module");
const country_entity_1 = require("./country/entities/country.entity");
const city_entity_1 = require("./city/entities/city.entity");
const state_entity_1 = require("./state/entities/state.entity");
const chat_module_1 = require("./chatgpt/chat.module");
const questions_module_1 = require("./questions/questions.module");
const answer_module_1 = require("./answer/answer.module");
const user_atemp_ques_module_1 = require("./user-atemp-ques/user-atemp-ques.module");
const user_atemp_que_entity_1 = require("./user-atemp-ques/entities/user-atemp-que.entity");
const quiz_by_answer_module_1 = require("./quiz-by-answer/quiz-by-answer.module");
const result_module_1 = require("./result/result.module");
const mailer_1 = require("@nestjs-modules/mailer");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '103.195.4.8',
                port: 3306,
                username: 'ezpz',
                password: 'esh@len$1',
                database: 'admin_ezpz',
                entities: [__dirname + '/**/*.entity{.ts,.js}', user_entity_1.User, country_entity_1.Country, city_entity_1.City, state_entity_1.State, user_atemp_que_entity_1.UserAtempQue],
                synchronize: false,
                autoLoadEntities: true,
            }),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 587,
                    ignoreTLS: true,
                    secure: process.env.MAIL_SECURE || false,
                    service: 'Gmail',
                    auth: {
                        user: 'strangerpart128@gmail.com',
                        pass: 'nexgypqvrzkvmmmh',
                    },
                },
                defaults: {
                    from: process.env.MAIL_FROM || '"No Reply" <no-reply@localhost>',
                },
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            country_module_1.CountryModule,
            state_module_1.StateModule,
            city_module_1.CityModule,
            chat_module_1.ChatModule,
            questions_module_1.QuestionsModule,
            answer_module_1.AnswerModule,
            user_atemp_ques_module_1.UserAtempQuesModule,
            quiz_by_answer_module_1.QuizByAnswerModule,
            result_module_1.ResultModule,
        ],
        providers: [],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map