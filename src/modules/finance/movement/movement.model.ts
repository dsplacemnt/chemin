import { Movement as MovementDB } from '@prisma/client';

export class Movement {
  id: MovementDB[`id`];

  createdAt: MovementDB[`createdAt`];

  updatedAt: MovementDB[`updatedAt`];

  value: MovementDB[`value`];

  memberId: MovementDB[`memberId`];

  typeId: MovementDB[`typeId`];
}
