import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('result')
export class Result {
@PrimaryGeneratedColumn()
id: number;

@Column()
userId: number;

@Column()
result: string;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updatedAt: Date;

@Column({type:'boolean', default: false})
isDeleted: boolean;
}
