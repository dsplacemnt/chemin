import { Member } from '@prisma/client';

export class MemberEntity implements Member {
  constructor(partial: Partial<MemberEntity>) {
    Object.assign(this, partial);
  }
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  entityId: number;
}
