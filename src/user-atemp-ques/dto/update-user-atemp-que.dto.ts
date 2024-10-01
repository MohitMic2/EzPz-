import { PartialType } from '@nestjs/swagger';
import { CreateUserAtempQueDto } from './create-user-atemp-que.dto';

export class UpdateUserAtempQueDto extends PartialType(CreateUserAtempQueDto) {}
