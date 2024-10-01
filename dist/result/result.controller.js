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
exports.ResultController = void 0;
const common_1 = require("@nestjs/common");
const result_service_1 = require("./result.service");
const create_result_dto_1 = require("./dto/create-result.dto");
const swagger_1 = require("@nestjs/swagger");
let ResultController = class ResultController {
    constructor(resultService) {
        this.resultService = resultService;
    }
    create(createResultDto) {
        return this.resultService.create(createResultDto);
    }
    findAll() {
        return this.resultService.findAll();
    }
    findOne(id) {
        return this.resultService.findOne(+id);
    }
    remove(id) {
        return this.resultService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('create-result'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_result_dto_1.CreateResultDto]),
    __metadata("design:returntype", void 0)
], ResultController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('get-All'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResultController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('getOne/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResultController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResultController.prototype, "remove", null);
ResultController = __decorate([
    (0, common_1.Controller)('result'),
    (0, swagger_1.ApiTags)('result'),
    __metadata("design:paramtypes", [result_service_1.ResultService])
], ResultController);
exports.ResultController = ResultController;
//# sourceMappingURL=result.controller.js.map