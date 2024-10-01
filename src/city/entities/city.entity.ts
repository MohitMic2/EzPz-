import { Country } from "src/country/entities/country.entity";
import { State } from "src/state/entities/state.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('city')
export class City {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cityName: string;

    @Column()
    countryId: number;

    @Column()
    stateId: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({type: 'boolean', default: false})
    isDeleted: boolean;


    @ManyToOne(() => Country, (c) => c.city)
    @JoinColumn({name:"countryId"})
    country: Country;

    @ManyToOne(() => State, (c) => c.city)
    @JoinColumn({name:"stateId"})
    state: State;


}
