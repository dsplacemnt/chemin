import { MovementType } from '@prisma/client';
import { OrganizationEntity } from 'src/modules/core/organization/entities/organization.entity';

export class MovementTypeEntity implements MovementType {
  constructor(data: Partial<MovementTypeEntity>) {
    Object.assign(this, data);
  }

  id: number;

  createdAt: Date;

  updatedAt: Date;

  name: string;

  organizationId: number;
}
