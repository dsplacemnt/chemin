import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { MovementEntity } from './movement.entity';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';

@Injectable()
export class MovementRepository {
  constructor(private prisma: PrismaService) {}

  async create(createMovementDto: CreateMovementDto): Promise<MovementEntity> {
    const { memberId, movementTypeId, ...movementData } = createMovementDto;
    return new MovementEntity(
      await this.prisma.movement.create({
        data: {
          ...movementData,
          member: { connect: { id: memberId } },
          movementType: { connect: { id: movementTypeId } },
        },
      }),
    );
  }

  async findAll(): Promise<MovementEntity[]> {
    const movements = await this.prisma.movement.findMany();
    return movements.map((movement) => new MovementEntity(movement));
  }

  async findOne(id: number): Promise<MovementEntity> {
    return new MovementEntity(await this.prisma.movement.findUnique({ where: { id } }));
  }

  async update(id: number, updateMovementDto: UpdateMovementDto): Promise<MovementEntity> {
    return new MovementEntity(await this.prisma.movement.update({ where: { id }, data: updateMovementDto }));
  }

  async remove(id: number): Promise<MovementEntity> {
    return new MovementEntity(await this.prisma.movement.delete({ where: { id } }));
  }
}
