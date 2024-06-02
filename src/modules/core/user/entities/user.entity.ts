import { User } from '@prisma/client';

export class UserEntity implements User {
  constructor(data: Partial<UserEntity>) {
    Object.assign(this, data);
  }
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  email: string;
  password: string;
  organizationId: number;
}
