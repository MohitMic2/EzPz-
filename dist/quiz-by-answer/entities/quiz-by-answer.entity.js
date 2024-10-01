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
exports.QuizByAnswer = void 0;
const questions_entity_1 = require("../../questions/entities/questions.entity");
const typeorm_1 = require("typeorm");
let QuizByAnswer = class QuizByAnswer {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], QuizByAnswer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], QuizByAnswer.prototype, "questionId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], QuizByAnswer.prototype, "answerId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], QuizByAnswer.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], QuizByAnswer.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Object)
], QuizByAnswer.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => questions_entity_1.Questions, (q) => q.qzanswer),
    (0, typeorm_1.JoinColumn)({ name: "questionId" }),
    __metadata("design:type", questions_entity_1.Questions)
], QuizByAnswer.prototype, "questions", void 0);
QuizByAnswer = __decorate([
    (0, typeorm_1.Entity)('quiz_by_answer')
], QuizByAnswer);
exports.QuizByAnswer = QuizByAnswer;
//# sourceMappingURL=quiz-by-answer.entity.js.map