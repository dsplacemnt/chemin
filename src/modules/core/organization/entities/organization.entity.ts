import { ApiProperty } from '@nestjs/swagger';
import { Organization } from '@prisma/client';

export class OrganizationEntity implements Organization {
  constructor(data: Partial<OrganizationEntity>) {
    Object.assign(this, data);
  }
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  name: string;
}
