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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAtempQuesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_atemp_que_entity_1 = require("./entities/user-atemp-que.entity");
const response_1 = require("../shared/response");
const questions_entity_1 = require("../questions/entities/questions.entity");
let UserAtempQuesService = class UserAtempQuesService {
    constructor(UserAtempQueRepository, QuestionsRepo) {
        this.UserAtempQueRepository = UserAtempQueRepository;
        this.QuestionsRepo = QuestionsRepo;
    }
    async create(createUserAtempQueDto) {
        try {
            if (createUserAtempQueDto.id == 0) {
                let attendQueAns = await this.UserAtempQueRepository.save(createUserAtempQueDto);
                let data = await this.findOneQuestionData(createUserAtempQueDto.nestQuestionId);
                let createUserAtempQueId = attendQueAns.id;
                if (data == null) {
                    return (0, response_1.WriteResponse)(400, { createUserAtempQueId: createUserAtempQueId }, "time to submit from here ");
                }
                data['createUserAtempQueId'] = createUserAtempQueId;
                return (0, response_1.WriteResponse)(200, data, "success ");
            }
            else {
                await this.UserAtempQueRepository.save(createUserAtempQueDto);
                let data = await this.findOneQuestionData(createUserAtempQueDto.nestQuestionId);
                if (data == null) {
                    return (0, response_1.WriteResponse)(400, false, "time to submit");
                }
                return (0, response_1.WriteResponse)(200, data, 'UserAtempQue Update Successfully');
            }
        }
        catch (e) {
            return (0, response_1.WriteResponse)(400, false, e.message);
        }
    }
    async findOneQuestionData(id) {
        const q = await this.QuestionsRepo.findOne({ where: { id } });
        if (q) {
            return this.QuestionsRepo.createQueryBuilder('question')
                .leftJoinAndSelect('question.answer', 'answer')
                .where('question.id = :id', { id })
                .getOne();
        }
        else {
            return (0, response_1.WriteResponse)(400, false);
        }
    }
    async findAll() {
        const UserAtempQue = await this.UserAtempQueRepository.find({
            where: { isDeleted: false },
        });
        if (UserAtempQue) {
            const count = UserAtempQue.length;
            return (0, response_1.WriteResponse)(200, UserAtempQue, 'UserAtempQue Found Successfully');
        }
        return (0, response_1.WriteResponse)(404, false, 'UserAtempQue Not Found');
    }
    async findOne(id) {
        const UserAtempQue = await this.UserAtempQueRepository.find({
            where: { isDeleted: false, userId: id },
        });
        if (UserAtempQue) {
            return (0, response_1.WriteResponse)(200, UserAtempQue, 'UserAtempQue Found Successfully');
        }
        return (0, response_1.WriteResponse)(404, false, 'UserAtempQue Not Found');
    }
    async remove(id) {
        const UserAtempQue = await this.UserAtempQueRepository.delete({ id: id, isDeleted: false });
        if (UserAtempQue.affected == 0) {
            return (0, response_1.WriteResponse)(400, false, 'UserAtempQue Not Found');
        }
        return (0, response_1.WriteResponse)(200, true, 'UserAtempQue Delete Successfully');
    }
};
UserAtempQuesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_atemp_que_entity_1.UserAtempQue)),
    __param(1, (0, typeorm_1.InjectRepository)(questions_entity_1.Questions)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserAtempQuesService);
exports.UserAtempQuesService = UserAtempQuesService;
//# sourceMappingURL=user-atemp-ques.service.js.map