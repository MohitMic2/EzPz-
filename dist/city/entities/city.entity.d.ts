import { Country } from "src/country/entities/country.entity";
import { State } from "src/state/entities/state.entity";
export declare class City {
    id: number;
    cityName: string;
    countryId: number;
    stateId: number;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
    country: Country;
    state: State;
}
