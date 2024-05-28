import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MovementRepository {
  constructor(private prisma: PrismaService) {}

  async create(movementCreateInput: Prisma.MovementCreateInput) {
    return await this.prisma.movement.create({ data: movementCreateInput });
  }

  async findAll() {
    return await this.prisma.movement.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.movement.findUnique({ where: { id } });
  }

  async update(id: number, updateMovementDto: Prisma.MovementUpdateInput) {
    return await this.prisma.movement.update({ where: { id }, data: updateMovementDto });
  }

  async remove(id: number) {
    return await this.prisma.movement.delete({ where: { id } });
  }
}
