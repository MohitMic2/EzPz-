import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateCityDto {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
     @IsString()
     cityName:string;

     @ApiProperty()
    @IsNumber()
      countryId: number;

      @ApiProperty()
      @IsNumber()
    stateId: number;

}
