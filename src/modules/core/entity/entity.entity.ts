import { Entity } from '@prisma/client';

export class EntityEntity implements Entity {
  constructor(partial: Partial<EntityEntity>) {
    Object.assign(this, partial);
  }
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
}
