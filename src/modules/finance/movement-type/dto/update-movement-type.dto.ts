import { PartialType } from '@nestjs/swagger';
import { CreateMovementTypeDto } from './create-movement-type.dto';

export class UpdateMovementTypeDto extends PartialType(CreateMovementTypeDto) {}
