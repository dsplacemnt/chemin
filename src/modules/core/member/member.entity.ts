import { Member } from '@prisma/client';
import { UserEntity } from '../user/entities/user.entity';

export class MemberEntity implements Member {
  constructor(partial: Partial<MemberEntity>) {
    Object.assign(this, partial);
  }
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  organizationId: number;
}
