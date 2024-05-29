import { ApiProperty } from '@nestjs/swagger';

export class CreateEntityDto {
  @ApiProperty()
  name: string;
}
