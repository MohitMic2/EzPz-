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
exports.Questions = void 0;
const answer_entity_1 = require("../../answer/entities/answer.entity");
const quiz_by_answer_entity_1 = require("../../quiz-by-answer/entities/quiz-by-answer.entity");
const typeorm_1 = require("typeorm");
let Questions = class Questions {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Questions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Questions.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Questions.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Questions.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Questions.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => answer_entity_1.Answer, (a) => a.questions),
    __metadata("design:type", Object)
], Questions.prototype, "answer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => quiz_by_answer_entity_1.QuizByAnswer, (qa) => qa.questions),
    __metadata("design:type", Object)
], Questions.prototype, "qzanswer", void 0);
Questions = __decorate([
    (0, typeorm_1.Entity)()
], Questions);
exports.Questions = Questions;
//# sourceMappingURL=questions.entity.js.map