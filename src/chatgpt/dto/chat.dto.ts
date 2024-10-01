import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

export class ChatDTO {
    @ApiProperty()
    ids: [];
}