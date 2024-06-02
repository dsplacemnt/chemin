import { Role } from '@prisma/client';

export class RoleEntity implements Role {
  id: number;
  name: string;
  organizationId: number;
  createdAt: Date;
  updatedAt: Date;
}
