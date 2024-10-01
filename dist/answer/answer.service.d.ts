import { Repository } from 'typeorm';
import { CreateAnswerDto } from './dto/answer.dto';
import { Answer } from './entities/answer.entity';
export declare class AnswerService {
    private readonly answerRepo;
    constructor(answerRepo: Repository<Answer>);
    create(answer: CreateAnswerDto): Promise<any>;
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
    remove(id: number): Promise<import("typeorm").UpdateResult>;
}
