import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateResultDto {
    @ApiProperty()
        @IsNumber()
        id: number;

        @ApiProperty()
        @IsNumber()
        userId: number;

        @ApiProperty()
        @IsString()
        result: string;
}
