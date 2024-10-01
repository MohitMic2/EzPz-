import { CreateUserAtempQueDto } from './dto/create-user-atemp-que.dto';
import { Repository } from 'typeorm';
import { UserAtempQue } from './entities/user-atemp-que.entity';
import { Questions } from 'src/questions/entities/questions.entity';
export declare class UserAtempQuesService {
    private readonly UserAtempQueRepository;
    private readonly QuestionsRepo;
    constructor(UserAtempQueRepository: Repository<UserAtempQue>, QuestionsRepo: Repository<Questions>);
    create(createUserAtempQueDto: CreateUserAtempQueDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        message: string;
        data?: undefined;
    }>;
    findOneQuestionData(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        message: string;
        data?: undefined;
    } | Questions>;
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
