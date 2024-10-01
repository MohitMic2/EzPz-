import { CreateQuizByAnswerDto } from './dto/create-quiz-by-answer.dto';
import { Repository } from 'typeorm';
import { QuizByAnswer } from './entities/quiz-by-answer.entity';
export declare class QuizByAnswerService {
    private readonly QuizByAnswerRepository;
    constructor(QuizByAnswerRepository: Repository<QuizByAnswer>);
    create(createQuizByAnswerDto: CreateQuizByAnswerDto): Promise<{
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
    GetNextQuizData(id: number): Promise<void>;
}
