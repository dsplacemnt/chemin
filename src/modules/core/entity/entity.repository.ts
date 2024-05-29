import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
import { EntityEntity } from './entity.entity';
@Injectable()
export class EntityRepository {
  constructor(private prisma: PrismaService) {}

  async create(createEntityDto: CreateEntityDto): Promise<EntityEntity> {
    return await this.prisma.entity.create({ data: createEntityDto });
  }

  async findAll(): Promise<EntityEntity[]> {
    return await this.prisma.entity.findMany();
  }

  async findOne(id: number): Promise<EntityEntity> {
    return await this.prisma.entity.findUnique({ where: { id } });
  }

  async update(id: number, updateEntityDto: UpdateEntityDto): Promise<EntityEntity> {
    return await this.prisma.entity.update({ where: { id }, data: updateEntityDto });
  }

  async remove(id: number): Promise<EntityEntity> {
    return await this.prisma.entity.delete({ where: { id } });
  }
}
