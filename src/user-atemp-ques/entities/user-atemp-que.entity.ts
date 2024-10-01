import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user-atemp-que')
export class UserAtempQue {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId:number;

    @Column()
    question: string;

    @Column()
    userAns: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
updatedAt:Date;

@Column({ type: 'boolean',default:false})
isDeleted:boolean;
}
