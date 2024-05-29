import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMovementTypeDto {
  @ApiProperty({ required: true })
  @IsString()
  name: string;
}
