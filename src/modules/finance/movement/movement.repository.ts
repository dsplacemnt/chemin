import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';

@Injectable()
export class MovementRepository {
  constructor(private prisma: PrismaService) {}

  // TODO
  // use prisma create input instead of dto in create method
  // add return to this method with a promise
  async create(createMovementDto: CreateMovementDto) {
    try {
      let createdMovement = await this.prisma.movements.create({
        data: {
          ...createMovementDto,
        },
      });
      const createdMovementDeserialized = JSON.stringify(createdMovement, (key, value) =>
        typeof value === 'bigint' ? value.toString() + 'n' : value,
      );
      return JSON.parse(createdMovementDeserialized);
    } catch (error) {
      throw new InternalServerErrorException('Something bad happened', {
        cause: new Error(),
        description: error.message,
      });
    }
  }

  async findAll() {
    return await this.prisma.movements.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.movements.findUnique({ where: { id } });
  }

  // TODO
  // use prisma update input instead of dto in update method
  // add return to this method with a promise
  async update(id: number, updateMovementDto: UpdateMovementDto) {
    try {
      let updatedMovement = await this.prisma.movements.update({
        where: { id },
        data: updateMovementDto,
      });
      const updatedMovementDeserialized = JSON.stringify(updatedMovement, (key, value) =>
        typeof value === 'bigint' ? value.toString() + 'n' : value,
      );
      return JSON.parse(updatedMovementDeserialized);
    } catch (error) {
      throw new InternalServerErrorException('Something bad happened', {
        cause: new Error(),
        description: error.message,
      });
    }
  }

  async remove(id: number) {
    return await this.prisma.movements.delete({ where: { id } });
  }
}
