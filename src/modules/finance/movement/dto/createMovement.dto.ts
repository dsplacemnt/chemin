import { ApiProperty } from "@nestjs/swagger";

export class CreateMovementDto {
  @ApiProperty()
  value: number;

  @ApiProperty()
  description: string;

  @ApiProperty()
  type: string;
}
