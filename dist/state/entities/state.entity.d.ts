import { Country } from "src/country/entities/country.entity";
export declare class State {
    id: number;
    stateName: string;
    countryId: number;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
    city: any;
    country: Country;
}
