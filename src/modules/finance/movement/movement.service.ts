import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateMovementDto } from './dto/createMovement.dto';
import { UpdateMovementDto } from './dto/updateMovement.dto';

@Injectable()
export class MovementService {
  constructor(private prisma: PrismaService) {}

  async create(createMovementDto: CreateMovementDto) {
    return await this.prisma.movement.create({ data: createMovementDto });
  }

  async findAll() {
    return await this.prisma.movement.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.movement.findUnique({ where: { id } });
  }

  async update(id: number, updateMovementDto: UpdateMovementDto) {
    return await this.prisma.movement.update({
      where: { id },
      data: updateMovementDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.movement.delete({ where: { id } });
  }
}
