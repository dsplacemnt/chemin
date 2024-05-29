import { PartialType } from '@nestjs/swagger';
import { CreateMovementDto } from './create-movement.dto';

export class UpdateMovementDto extends PartialType(CreateMovementDto) {}
