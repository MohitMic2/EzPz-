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
exports.AnswerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const answer_entity_1 = require("./entities/answer.entity");
const response_1 = require("../shared/response");
let AnswerService = class AnswerService {
    constructor(answerRepo) {
        this.answerRepo = answerRepo;
    }
    async create(answer) {
        const answerD = await this.answerRepo.save(answer);
        return (0, response_1.WriteResponse)(200, true, "Success");
    }
    async findAll() {
        const list = await this.answerRepo.find({ where: { isDeleted: false } });
        if (list.length) {
            return (0, response_1.WriteResponse)(200, list, "Success");
        }
        return (0, response_1.WriteResponse)(400, false, "record not found.");
    }
    async findOne(id) {
        const a = await this.answerRepo.findOne({ where: { id } });
        if (a) {
            return (0, response_1.WriteResponse)(200, a, "Success");
        }
        return (0, response_1.WriteResponse)(400, false, "record not found.");
    }
    remove(id) {
        return this.answerRepo.update({ id }, { isDeleted: true });
    }
};
AnswerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(answer_entity_1.Answer)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AnswerService);
exports.AnswerService = AnswerService;
//# sourceMappingURL=answer.service.js.map