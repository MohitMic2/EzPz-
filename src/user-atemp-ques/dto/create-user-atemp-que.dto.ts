import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateUserAtempQueDto {
@ApiProperty()
@IsNumber()
id: number;

@ApiProperty()
@IsNumber()
userId: number;

@ApiProperty()
@IsString()
question: string;

@ApiProperty()
@IsString()
userAns: string;

@ApiProperty()
@IsNumber()
nestQuestionId : number
}
