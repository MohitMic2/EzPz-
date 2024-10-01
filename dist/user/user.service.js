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
exports.UserService = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const response_1 = require("../shared/response");
const mailer_1 = require("@nestjs-modules/mailer");
let UserService = class UserService {
    constructor(userRepository, mailerService, jwtService) {
        this.userRepository = userRepository;
        this.mailerService = mailerService;
        this.jwtService = jwtService;
        this.otpStorage = {};
    }
    async Create(data) {
        const { userName, email, password, mobileNo } = data;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.userRepository.create({
            userName,
            email,
            password: hashedPassword,
            mobileNo
        });
        this.userRepository.save(user);
        const User = this.jwtService.sign({ id: user });
        return { data };
    }
    async getUser(query) {
        return this.userRepository.findOne(query);
    }
    async UpdateUser(updateUserdto) {
        try {
            let Mlength = updateUserdto.mobileNo.length;
            if (Mlength < 8 || Mlength > 14) {
                return (0, response_1.WriteResponse)(400, false, "Mobile Should be between 8 to 14");
            }
            if (updateUserdto.age < 14) {
                return (0, response_1.WriteResponse)(400, false, 'age must be greater then 14');
            }
            const user = await this.userRepository.findOne({
                where: { id: updateUserdto.id, isDeleted: false }
            });
            if (!user) {
                return (0, response_1.WriteResponse)(400, false, 'No User Found with this id');
            }
            let x = await this.userRepository.save(updateUserdto);
            return (0, response_1.WriteResponse)(200, x, "User Data Updated Succesfully");
        }
        catch (e) {
            return (0, response_1.WriteResponse)(400, false, e.mesaage);
        }
    }
    async LogIn(email, password) {
        const user = await this.userRepository.findOne({ where: { email } });
        if (!user)
            return null;
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            return passwordValid;
        }
        if (!user) {
            throw new common_1.NotAcceptableException('could not find the user');
        }
        if (user && passwordValid) {
            return user;
        }
        return user;
    }
    async getUserByMobile(mobileNo) {
        return await this.userRepository.findOne({
            where: { mobileNo },
        });
    }
    async getUserByEmail(email) {
        return await this.userRepository.findOne({
            where: { email },
        });
    }
    async findAll() {
        const User = await this.userRepository.find({
            where: { isDeleted: false },
        });
        if (User.length) {
            return (0, response_1.WriteResponse)(200, User, 'User Found Successfully.');
        }
        return (0, response_1.WriteResponse)(404, false, 'User Not Found.');
    }
    async findOne(id) {
        const User = await this.userRepository.findOne({
            where: { isDeleted: false, id: id },
        });
        if (User) {
            User.password = '';
            return (0, response_1.WriteResponse)(200, User, 'User Found Successfully.');
        }
        return (0, response_1.WriteResponse)(404, false, 'User Not Found.');
    }
    async resetPassword(data) {
        const User = await this.userRepository.findOne({ where: { email: data.email } });
        if (User) {
            User.password = bcrypt.hashSync(data.new_password, 10);
            this.userRepository.save(User);
            return (0, response_1.WriteResponse)(200, {}, 'Password change successfully.');
        }
        throw new common_1.HttpException({
            statusCode: 404,
            message: 'User does not exists.',
        }, 200);
    }
    async changePassword(id, data) {
        const User = await this.userRepository.findOne({ where: { id: data.id } });
        if (bcrypt.compareSync(data.oldPassword, User.password)) {
            User.password = bcrypt.hashSync(data.newPassword, 10);
            this.userRepository.save(User);
            return (0, response_1.WriteResponse)(200, 'Password change successfully.');
        }
        throw new common_1.HttpException({
            statusCode: 404,
            message: 'current password does not match',
        }, 200);
    }
    async forgetPassword(email, host) {
        try {
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            this.otpStorage[email.email] = otp;
            console.log(this.otpStorage);
            let check = await this.userRepository.findOne({
                where: { email: email.email, isDeleted: false },
            });
            if (check) {
                return this.mailerService
                    .sendMail({
                    to: email.email,
                    from: 'strangerpart128@gmail.com',
                    subject: 'Forgot Password.',
                    html: `
          Hi ${check.userName},
          >Forgot Password</a><br/><br/>
          Otp is :- ${otp}<br/>
          `,
                    context: {
                        username: 'ezpz',
                    },
                })
                    .then((res) => {
                    console.log(res);
                    return (0, response_1.WriteResponse)(200, {}, 'OTP share to your email address.');
                })
                    .catch((e) => (0, response_1.WriteResponse)(400, false, e.message));
            }
            else {
                return (0, response_1.WriteResponse)(203, false, 'Provided email does not exists.');
            }
        }
        catch (e) {
            return (0, response_1.WriteResponse)(400, false, e.message);
        }
    }
    verifyOtp(email, enteredOtp) {
        const storedOtp = this.otpStorage[email];
        if (storedOtp === enteredOtp) {
            return (0, response_1.WriteResponse)(200, true, 'success');
        }
        else {
            return (0, response_1.WriteResponse)(400, false, "invalid otp");
        }
    }
    async remove(id) {
        const User = await this.userRepository.delete({
            id: id, isDeleted: false
        });
        if (User.affected == 0) {
            return (0, response_1.WriteResponse)(400, false, 'User Not found.');
        }
        return (0, response_1.WriteResponse)(200, true, 'User Deleted Successfully.');
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        mailer_1.MailerService,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map