import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateQuizByAnswerDto {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNumber()
    questionId: number;

    @ApiProperty()
    @IsNumber()
    answerId: number;

}
