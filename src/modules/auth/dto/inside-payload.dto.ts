import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class InsidePayloadDto {
  constructor(email: string, userId: number) {
    this.email = email;
    this.userId = userId;
  }
  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsNumber()
  userId: number;
}
