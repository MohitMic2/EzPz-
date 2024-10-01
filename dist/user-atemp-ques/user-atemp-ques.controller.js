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
exports.UserAtempQuesController = void 0;
const common_1 = require("@nestjs/common");
const user_atemp_ques_service_1 = require("./user-atemp-ques.service");
const create_user_atemp_que_dto_1 = require("./dto/create-user-atemp-que.dto");
const swagger_1 = require("@nestjs/swagger");
let UserAtempQuesController = class UserAtempQuesController {
    constructor(userAtempQuesService) {
        this.userAtempQuesService = userAtempQuesService;
    }
    create(createUserAtempQueDto) {
        return this.userAtempQuesService.create(createUserAtempQueDto);
    }
    findAll() {
        return this.userAtempQuesService.findAll();
    }
    findOne(id) {
        return this.userAtempQuesService.findOne(+id);
    }
    remove(id) {
        return this.userAtempQuesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('/create-or-update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_atemp_que_dto_1.CreateUserAtempQueDto]),
    __metadata("design:returntype", void 0)
], UserAtempQuesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/get-All'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserAtempQuesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('getOne/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserAtempQuesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserAtempQuesController.prototype, "remove", null);
UserAtempQuesController = __decorate([
    (0, common_1.Controller)('user-atemp-ques'),
    (0, swagger_1.ApiTags)('user-atemp-ques'),
    __metadata("design:paramtypes", [user_atemp_ques_service_1.UserAtempQuesService])
], UserAtempQuesController);
exports.UserAtempQuesController = UserAtempQuesController;
//# sourceMappingURL=user-atemp-ques.controller.js.map