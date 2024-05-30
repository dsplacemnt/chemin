import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { OrganizationEntity } from './entities/organization.entity';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrganizationRepository {
  constructor(private prisma: PrismaService) {}

  async create(createOrganizationDto: CreateOrganizationDto): Promise<OrganizationEntity> {
    return await this.prisma.organization.create({ data: createOrganizationDto });
  }

  async findAll(): Promise<OrganizationEntity[]> {
    const organizations = await this.prisma.organization.findMany();
    return organizations.map((organization) => new OrganizationEntity(organization));
  }

  async findOne(id: number): Promise<OrganizationEntity> {
    return new OrganizationEntity(await this.prisma.organization.findUnique({ where: { id } }));
  }

  async update(id: number, updateOrganizationDto: UpdateOrganizationDto): Promise<OrganizationEntity> {
    return new OrganizationEntity(
      await this.prisma.organization.update({ where: { id }, data: updateOrganizationDto }),
    );
  }

  async remove(id: number): Promise<OrganizationEntity> {
    return new OrganizationEntity(await this.prisma.organization.delete({ where: { id } }));
  }
}
