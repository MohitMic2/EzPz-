import { Answer } from "src/answer/entities/answer.entity";
import { Questions } from "src/questions/entities/questions.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('quiz_by_answer')
export class QuizByAnswer {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    questionId: number;

    @Column()
    answerId: number;

    @CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updateAt: Date;

@Column({ type: 'boolean', default: false})
isDeleted

@ManyToOne(() => Questions, (q) => q.qzanswer)
  @JoinColumn({name:"questionId"})
  questions: Questions;


//  @ManyToOne(() => Answer, (q) => q.qzanswer)
//  @JoinColumn({name:"answerId"})
//  answer: Answer;
}

