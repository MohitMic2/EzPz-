import { Questions } from 'src/questions/entities/questions.entity';
export declare class Answer {
    id: number;
    answer: string;
    questionId: number;
    NextQuestionId: number;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
    questions: Questions;
}
