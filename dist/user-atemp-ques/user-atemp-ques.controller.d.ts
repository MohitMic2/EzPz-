import { UserAtempQuesService } from './user-atemp-ques.service';
import { CreateUserAtempQueDto } from './dto/create-user-atemp-que.dto';
export declare class UserAtempQuesController {
    private readonly userAtempQuesService;
    constructor(userAtempQuesService: UserAtempQuesService);
    create(createUserAtempQueDto: CreateUserAtempQueDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        message: string;
        data?: undefined;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        message: string;
        data?: undefined;
    }>;
    findOne(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        message: string;
        data?: undefined;
    }>;
    remove(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        message: string;
        data?: undefined;
    }>;
}
