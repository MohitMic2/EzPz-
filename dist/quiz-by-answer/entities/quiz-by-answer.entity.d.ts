import { Questions } from "src/questions/entities/questions.entity";
export declare class QuizByAnswer {
    id: number;
    questionId: number;
    answerId: number;
    createdAt: Date;
    updateAt: Date;
    isDeleted: any;
    questions: Questions;
}
