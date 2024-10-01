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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const create_user_dto_2 = require("./dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
const response_1 = require("../shared/response");
const jwt_1 = require("@nestjs/jwt");
let UserController = class UserController {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async health(req) {
        console.log("working");
        return (0, response_1.WriteResponse)(200, true, 'health route working fine dev.');
    }
    async SingIn(CreateUserDto) {
        try {
            let isExits = await this.userService.getUserByEmail(CreateUserDto.email);
            if (isExits) {
                return (0, response_1.WriteResponse)(400, false, 'Email already exists.');
            }
            let ismobile = await this.userService.getUserByMobile(CreateUserDto.mobileNo);
            if (ismobile) {
                return (0, response_1.WriteResponse)(400, false, 'Mobile No. already exists.');
            }
            let user = await this.userService.Create(CreateUserDto);
            return {
                statusCode: 200,
                message: 'User registration successfully.',
                data: user.data,
            };
        }
        catch (e) {
            throw new common_1.HttpException({
                statusCode: 400,
                message: 'Something Went Wrong',
            }, 200);
        }
    }
    async UpateUser(updateUserdto) {
        try {
            let ismobile = await this.userService.getUserByMobile(updateUserdto.mobileNo);
            if (ismobile) {
                if (ismobile.id !== updateUserdto.id) {
                    return (0, response_1.WriteResponse)(400, false, 'Mobile No. already exists.');
                }
            }
            return await this.userService.UpdateUser(updateUserdto);
        }
        catch (e) {
            throw new common_1.HttpException({
                statusCode: 400,
                message: 'Something Went Wrong',
            }, 200);
        }
    }
    async LogIn(data) {
        let user = await this.userService.LogIn(data.email, data.password);
        console.log(user);
        if (!user) {
            return (0, response_1.WriteResponse)(401, data, 'invalid credentials');
        }
        const payload = { id: user.id };
        const token = {
            access_token: await this.jwtService.signAsync(payload),
        };
        return (0, response_1.WriteResponse)(200, { token: token, id: user.id, userName: user.userName, email: user.email }, "Login successfully.");
    }
    findAll() {
        return this.userService.findAll();
    }
    findOne(id) {
        return this.userService.findOne(+id);
    }
    async resetPassword(data) {
        return this.userService.resetPassword(data);
    }
    async changePassword(data, req) {
        return await this.userService.changePassword(req.User, data);
    }
    async forgetPassword(email, req) {
        return await this.userService.forgetPassword(email, req.get('host'));
    }
    verifyOtp(verifyDto) {
        return this.userService.verifyOtp(verifyDto.email, verifyDto.enteredOtp);
    }
    remove(id) {
        return this.userService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)("/health"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "health", null);
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "SingIn", null);
__decorate([
    (0, common_1.Post)('/Update-user'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_2.UpdateUserdto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "UpateUser", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.LoginDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "LogIn", null);
__decorate([
    (0, common_1.Get)('get-All'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('getOne/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.ResetPassDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Post)('change-password'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.ChangePasswordDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Post)('forget-password'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.ForgetPassword, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "forgetPassword", null);
__decorate([
    (0, common_1.Post)('verify'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.VerifyDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "verifyOtp", null);
__decorate([
    (0, common_1.Get)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, swagger_1.ApiTags)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map