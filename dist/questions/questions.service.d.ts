import { Repository } from 'typeorm';
import { Questions } from './entities/questions.entity';
import { CreateQuestionDto } from './dto/questions.dto';
export declare class QuestionsService {
    private readonly questionRepo;
    constructor(questionRepo: Repository<Questions>);
    create(question: CreateQuestionDto): Promise<any>;
    findAll(): Promise<{
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
