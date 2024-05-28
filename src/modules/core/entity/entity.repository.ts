import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class EntityRepository {
  constructor(private prisma: PrismaService) {}

  async create(entity: Prisma.EntityCreateInput) {
    return await this.prisma.entity.create({ data: createEntityDto });
  }

  async findAll() {
    return await this.prisma.entity.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.entity.findUnique({ where: { id } });
  }

  async update(id: number, UpdateEntityDto: Prisma.EntityUpdateInput) {
    return await this.prisma.entity.update({ where: { id }, data: UpdateEntityDto });
  }

  async remove(id: number) {
    return await this.prisma.entity.delete({ where: { id } });
  }
}
