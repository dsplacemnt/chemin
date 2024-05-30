import { MovementType } from '@prisma/client';

export class MovementTypeEntity implements MovementType {
  constructor(data: Partial<MovementTypeEntity>) {
    Object.assign(this, data);
  }
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
}
