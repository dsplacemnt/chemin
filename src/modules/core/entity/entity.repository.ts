import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
@Injectable()
export class EntityRepository {
  constructor(private prisma: PrismaService) {}

  async create(createEntityDto: CreateEntityDto) {
    return await this.prisma.entity.create({ data: createEntityDto });
  }

  async findAll() {
    return await this.prisma.entity.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.entity.findUnique({ where: { id } });
  }

  async update(id: number, UpdateEntityDto: UpdateEntityDto) {
    return await this.prisma.entity.update({ where: { id }, data: UpdateEntityDto });
  }

  async remove(id: number) {
    return await this.prisma.movements.delete({ where: { id } });
  }
}
