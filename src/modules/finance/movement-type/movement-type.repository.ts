import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateMovementTypeDto } from './dto/create-movement-type.dto';
import { UpdateMovementTypeDto } from './dto/update-movement-type.dto';
import { MovementTypeEntity } from './entities/movement-type.entity';

@Injectable()
export class MovementTypeRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createMovementTypeDto: CreateMovementTypeDto): Promise<MovementTypeEntity> {
    return this.prismaService.movementType.create({ data: createMovementTypeDto });
  }
  findAll(): Promise<MovementTypeEntity[]> {
    return this.prismaService.movementType.findMany();
  }
  findOne(id: number): Promise<MovementTypeEntity> {
    return this.prismaService.movementType.findUnique({ where: { id } });
  }
  update(id: number, updateMovementTypeDto: UpdateMovementTypeDto): Promise<MovementTypeEntity> {
    return this.prismaService.movementType.update({ where: { id }, data: updateMovementTypeDto });
  }
  remove(id: number): Promise<MovementTypeEntity> {
    return this.prismaService.movementType.delete({ where: { id } });
  }
}
