import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class IncomingPayloadDto {
  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNumber()
  sub: number;
}
