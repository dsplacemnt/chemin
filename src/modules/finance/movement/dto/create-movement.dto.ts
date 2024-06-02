import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMovementDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  date: Date;

  @ApiProperty()
  @IsNumber()
  value: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  memberId: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  movementTypeId: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  organizationId: number;
}
