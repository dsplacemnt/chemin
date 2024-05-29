import { MovementType } from '@prisma/client';

export class MovementTypeEntity implements MovementType {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
}
