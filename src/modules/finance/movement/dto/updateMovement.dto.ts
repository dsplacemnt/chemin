import { ApiProperty } from "@nestjs/swagger";

export class UpdateMovementDto {
  @ApiProperty()
  value: number;

  @ApiProperty()
  description: string;
   
  @ApiProperty()
  type: string;
}
