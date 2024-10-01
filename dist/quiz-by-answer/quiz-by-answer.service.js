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
exports.QuizByAnswerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const response_1 = require("../shared/response");
const quiz_by_answer_entity_1 = require("./entities/quiz-by-answer.entity");
let QuizByAnswerService = class QuizByAnswerService {
    constructor(QuizByAnswerRepository) {
        this.QuizByAnswerRepository = QuizByAnswerRepository;
    }
    async create(createQuizByAnswerDto) {
        try {
            if (createQuizByAnswerDto.id == 0) {
                await this.QuizByAnswerRepository.save(createQuizByAnswerDto);
                return (0, response_1.WriteResponse)(200, true, 'QuizByAnswer Create Seccessfully');
            }
            else {
                await this.QuizByAnswerRepository.save(createQuizByAnswerDto);
                return (0, response_1.WriteResponse)(200, true, 'QuizByAnswer Update Successfully');
            }
        }
        catch (e) {
            return (0, response_1.WriteResponse)(400, false, e.message);
        }
    }
    async findAll() {
        const QuizByAnswer = await this.QuizByAnswerRepository.find({
            where: { isDeleted: false },
        });
        if (QuizByAnswer) {
            return (0, response_1.WriteResponse)(200, QuizByAnswer, 'QuizByAnswer Found Successfully.');
        }
        return (0, response_1.WriteResponse)(404, false, 'QuizByAnswer Not Found.');
    }
    async findOne(id) {
        const QuizByAnswer = await this.QuizByAnswerRepository.findOne({
            where: { isDeleted: false, id: id },
        });
        if (QuizByAnswer) {
            return (0, response_1.WriteResponse)(200, QuizByAnswer, 'QuizByAnswer Found Successfully.');
        }
        return (0, response_1.WriteResponse)(404, QuizByAnswer, 'QuizByAnswer Not Found.');
    }
    async remove(id) {
        const QuizByAnswer = await this.QuizByAnswerRepository.delete({
            id: id, isDeleted: false
        });
        if (QuizByAnswer.affected == 0) {
            return (0, response_1.WriteResponse)(400, false, 'QuizByAnswer Not found.');
        }
        return (0, response_1.WriteResponse)(200, true, 'QuizByAnswer Deleted Successfully.');
    }
    async GetNextQuizData(id) {
    }
};
QuizByAnswerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(quiz_by_answer_entity_1.QuizByAnswer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], QuizByAnswerService);
exports.QuizByAnswerService = QuizByAnswerService;
//# sourceMappingURL=quiz-by-answer.service.js.map