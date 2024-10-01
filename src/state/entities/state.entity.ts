import { City } from "src/city/entities/city.entity";
import { Country } from "src/country/entities/country.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('state')
export class State {
    @PrimaryGeneratedColumn()
  id: number;

  @Column()
  stateName: string;

@Column()
countryId:number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'boolean', default: false })
  isDeleted: boolean;

  @OneToMany(() => City, (s) => s.state)
  city: any;


  @ManyToOne(() => Country, (c) => c.state)
    @JoinColumn({name:"countryId"})
    country: Country;

}
