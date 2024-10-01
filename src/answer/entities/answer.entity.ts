import { Questions } from 'src/questions/entities/questions.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  answer: string;

  @Column()
  questionId: number;

  @Column()
  NextQuestionId : number 

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'boolean', default: false })
  isDeleted: boolean;


  @ManyToOne(() => Questions, (q) => q.answer)
  @JoinColumn({name:"questionId"})
  questions: Questions;
}
