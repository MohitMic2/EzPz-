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
exports.QuestionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const questions_entity_1 = require("./entities/questions.entity");
const response_1 = require("../shared/response");
let QuestionsService = class QuestionsService {
    constructor(questionRepo) {
        this.questionRepo = questionRepo;
    }
    async create(question) {
        const questionD = await this.questionRepo.save(question);
        return (0, response_1.WriteResponse)(200, questionD, "success");
    }
    async findAll() {
        const quest = await this.questionRepo.find();
        if (quest.length) {
            return (0, response_1.WriteResponse)(200, quest);
        }
        else {
            return (0, response_1.WriteResponse)(400, false);
        }
    }
    async findOneQuestionData(id) {
        const q = await this.questionRepo.findOne({ where: { id } });
        if (q) {
            return this.questionRepo.createQueryBuilder('question')
                .leftJoinAndSelect('question.answer', 'answer')
                .where('question.id = :id', { id })
                .getOne();
            return (0, response_1.WriteResponse)(200, q);
        }
        else {
            return (0, response_1.WriteResponse)(400, false);
        }
    }
    async remove(id) {
        const isUpdated = await this.questionRepo.update({ id }, { isDeleted: true });
        if (isUpdated.affected == 0) {
            return (0, response_1.WriteResponse)(200, true, "question remove successfully.");
        }
        else {
            return (0, response_1.WriteResponse)(400, false, "question remove failed.");
        }
    }
};
QuestionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(questions_entity_1.Questions)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], QuestionsService);
exports.QuestionsService = QuestionsService;
//# sourceMappingURL=questions.service.js.map