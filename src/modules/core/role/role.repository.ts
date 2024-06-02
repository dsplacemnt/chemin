import { PrismaService } from 'src/database/prisma/prisma.service';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleEntity } from './entities/role.entity';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleRepository {
  constructor(private prisma: PrismaService) {}

  async create(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
    try {
      return await this.prisma.role.create({ data: createRoleDto });
    } catch (error) {
      throw new InternalServerErrorException(error.message.replace(/\n/g, ''));
    }
  }

  async findAll(): Promise<RoleEntity[]> {
    return await this.prisma.role.findMany();
  }

  async findOne(id: number): Promise<RoleEntity> {
    return await this.prisma.role.findUnique({ where: { id } });
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
    return await this.prisma.role.update({ where: { id }, data: updateRoleDto });
  }

  async remove(id: number): Promise<RoleEntity> {
    return await this.prisma.role.delete({ where: { id } });
  }
}
