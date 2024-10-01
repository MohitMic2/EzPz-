"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAtempQuesModule = void 0;
const common_1 = require("@nestjs/common");
const user_atemp_ques_service_1 = require("./user-atemp-ques.service");
const user_atemp_ques_controller_1 = require("./user-atemp-ques.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_atemp_que_entity_1 = require("./entities/user-atemp-que.entity");
const questions_entity_1 = require("../questions/entities/questions.entity");
let UserAtempQuesModule = class UserAtempQuesModule {
};
UserAtempQuesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_atemp_que_entity_1.UserAtempQue, questions_entity_1.Questions])],
        controllers: [user_atemp_ques_controller_1.UserAtempQuesController],
        providers: [user_atemp_ques_service_1.UserAtempQuesService]
    })
], UserAtempQuesModule);
exports.UserAtempQuesModule = UserAtempQuesModule;
//# sourceMappingURL=user-atemp-ques.module.js.map