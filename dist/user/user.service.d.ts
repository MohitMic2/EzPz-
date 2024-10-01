import { JwtService } from '@nestjs/jwt';
import { UpdateUserdto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
export declare class UserService {
    private readonly userRepository;
    private readonly mailerService;
    private jwtService;
    constructor(userRepository: Repository<User>, mailerService: MailerService, jwtService: JwtService);
    private otpStorage;
    Create(data: any): Promise<{
        data: string;
    }>;
    getUser(query: object): Promise<User>;
    UpdateUser(updateUserdto: UpdateUserdto): Promise<any>;
    LogIn(email: string, password: string): Promise<any>;
    getUserByMobile(mobileNo: string): Promise<any>;
    getUserByEmail(email: string): Promise<any>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        message: string;
        data?: undefined;
    }>;
    findOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        message: string;
        data?: undefined;
    }>;
    resetPassword(data: any): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        message: string;
        data?: undefined;
    }>;
    changePassword(id: any, data: any): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        message: string;
        data?: undefined;
    }>;
    forgetPassword(email: any, host: any): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        message: string;
        data?: undefined;
    }>;
    verifyOtp(email: string, enteredOtp: string): any;
    remove(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        message: string;
        data?: undefined;
    }>;
}
