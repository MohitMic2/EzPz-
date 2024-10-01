import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/answer.dto';
export declare class AnswerController {
    private readonly answerService;
    constructor(answerService: AnswerService);
    create(createAnswerDto: CreateAnswerDto): Promise<any>;
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
    remove(id: string): Promise<import("typeorm").UpdateResult>;
}
