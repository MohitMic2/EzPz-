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
exports.ResultService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const result_entity_1 = require("./entities/result.entity");
const typeorm_2 = require("typeorm");
const response_1 = require("../shared/response");
let ResultService = class ResultService {
    constructor(resultRepository) {
        this.resultRepository = resultRepository;
    }
    async create(createResultDto) {
        try {
            if (createResultDto.id == 0) {
                await this.resultRepository.save(createResultDto);
                return (0, response_1.WriteResponse)(200, true, 'Result Create Successfully.');
            }
            else {
                await this.resultRepository.save(createResultDto);
                return (0, response_1.WriteResponse)(200, true, 'State updated successfully.');
            }
        }
        catch (e) {
            return (0, response_1.WriteResponse)(400, false, e.message);
        }
    }
    async findAll() {
        const Result = await this.resultRepository.find({
            where: { isDeleted: false },
        });
        if (Result) {
            return (0, response_1.WriteResponse)(200, Result, 'Result Found Seccessfully.');
        }
        return (0, response_1.WriteResponse)(404, false, 'Result Not Found');
    }
    async findOne(id) {
        const Result = await this.resultRepository.findOne({
            where: { isDeleted: false, id: id },
        });
        if (Result) {
            return (0, response_1.WriteResponse)(200, Result, 'Result Found Successfully.');
        }
        return (0, response_1.WriteResponse)(404, false, 'Result Not Found.');
    }
    async remove(id) {
        const Result = await this.resultRepository.update({ id: id }, { isDeleted: true });
        if (Result.affected == 0) {
            return (0, response_1.WriteResponse)(400, false, 'Result Not Foiund.');
        }
        return (0, response_1.WriteResponse)(200, true, 'Result Deleted Successfully');
    }
};
ResultService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(result_entity_1.Result)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ResultService);
exports.ResultService = ResultService;
//# sourceMappingURL=result.service.js.map