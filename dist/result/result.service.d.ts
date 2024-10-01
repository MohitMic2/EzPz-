import { CreateResultDto } from './dto/create-result.dto';
import { Result } from './entities/result.entity';
import { Repository } from 'typeorm';
export declare class ResultService {
    private readonly resultRepository;
    constructor(resultRepository: Repository<Result>);
    create(createResultDto: CreateResultDto): Promise<{
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
}
