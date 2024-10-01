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
exports.QuizByAnswerController = void 0;
const common_1 = require("@nestjs/common");
const quiz_by_answer_service_1 = require("./quiz-by-answer.service");
const create_quiz_by_answer_dto_1 = require("./dto/create-quiz-by-answer.dto");
const swagger_1 = require("@nestjs/swagger");
let QuizByAnswerController = class QuizByAnswerController {
    constructor(quizByAnswerService) {
        this.quizByAnswerService = quizByAnswerService;
    }
    create(createQuizByAnswerDto) {
        return this.quizByAnswerService.create(createQuizByAnswerDto);
    }
    findAll() {
        return this.quizByAnswerService.findAll();
    }
    findOne(id) {
        return this.quizByAnswerService.findOne(+id);
    }
    remove(id) {
        return this.quizByAnswerService.remove(+id);
    }
    GetNextQuiz(id) {
        return this.quizByAnswerService.GetNextQuizData(+id);
    }
};
__decorate([
    (0, common_1.Post)('create-quiz-answer'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_quiz_by_answer_dto_1.CreateQuizByAnswerDto]),
    __metadata("design:returntype", void 0)
], QuizByAnswerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuizByAnswerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('getOne/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuizByAnswerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuizByAnswerController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('GetNextQuiz/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuizByAnswerController.prototype, "GetNextQuiz", null);
QuizByAnswerController = __decorate([
    (0, common_1.Controller)('quiz-by-answer'),
    (0, swagger_1.ApiTags)('quiz-by-answer'),
    __metadata("design:paramtypes", [quiz_by_answer_service_1.QuizByAnswerService])
], QuizByAnswerController);
exports.QuizByAnswerController = QuizByAnswerController;
//# sourceMappingURL=quiz-by-answer.controller.js.map