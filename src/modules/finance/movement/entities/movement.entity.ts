import { ApiProperty } from '@nestjs/swagger';
import { Movement } from '@prisma/client';
import { MovementTypeEntity } from '../../movement-type/entities/movement-type.entity';
import { MemberEntity } from 'src/modules/core/member/member.entity';

export class MovementEntity implements Movement {
  constructor({ member, movementType, ...data }: Partial<MovementEntity>) {
    Object.assign(this, data);

    if (member) {
      this.member = new MemberEntity(member);
    }
    if (movementType) {
      this.movementType = new MovementTypeEntity(movementType);
    }
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  value: number;

  @ApiProperty()
  memberId: number;

  @ApiProperty({ type: MemberEntity })
  member: MemberEntity;

  @ApiProperty()
  movementTypeId: number;

  @ApiProperty({ type: MovementTypeEntity })
  movementType: MovementTypeEntity;
}
