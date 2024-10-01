import { City } from 'src/city/entities/city.entity';
import { State } from 'src/state/entities/state.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('country')
export class Country {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  countryName: string;


  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'boolean', default: false })
  isDeleted: boolean;

  @OneToMany(() => State, (s) => s.country)
  state: any;

  @OneToMany(() => City, (s) => s.country)
  city: any;
}
