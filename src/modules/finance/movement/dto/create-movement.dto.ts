import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMovementDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  date: Date;

  @IsNumber()
  @ApiProperty()
  value: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  memberId: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  movementTypeId: number;
}
