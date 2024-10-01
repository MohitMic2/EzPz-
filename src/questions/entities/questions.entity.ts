import { Answer } from 'src/answer/entities/answer.entity';
import { QuizByAnswer } from 'src/quiz-by-answer/entities/quiz-by-answer.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Questions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'boolean', default: false })
  isDeleted: boolean;

  @OneToMany(() => Answer, (a) => a.questions)
    answer: any;


    @OneToMany(() => QuizByAnswer, (qa) => qa.questions)
    qzanswer: any;

    //@OneToMany(() => QuizByAnswer, (qa) => qa.answer)
    //qzanswer: any;
}
