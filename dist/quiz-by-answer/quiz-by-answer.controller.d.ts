import { QuizByAnswerService } from './quiz-by-answer.service';
import { CreateQuizByAnswerDto } from './dto/create-quiz-by-answer.dto';
export declare class QuizByAnswerController {
    private readonly quizByAnswerService;
    constructor(quizByAnswerService: QuizByAnswerService);
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
    GetNextQuiz(id: string): Promise<void>;
}
