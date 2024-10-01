import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  userName: string;

  @Column({nullable:true})
  age: number;

  @Column({nullable:true})
  gender: string;

  @Column()
  email: string;

  @Column({nullable:true})
  mobileNo: string;

  @Column()
  password: string;

  @Column({nullable:true})
  city: string;

  @Column({nullable:true})
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'boolean', default: false })
  isDeleted: boolean;

  @Column({nullable:true})
  lastLoginTime: Date;

}
