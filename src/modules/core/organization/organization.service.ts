import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { OrganizationEntity } from './entities/organization.entity';
import { OrganizationRepository } from './organization.repository';

@Injectable()
export class OrganizationService {
  constructor(private organizationRespository: OrganizationRepository) {}

  async create(createOrganizationDto: CreateOrganizationDto): Promise<OrganizationEntity> {
    return await this.organizationRespository.create(createOrganizationDto);
  }

  async findAll() {
    return await this.organizationRespository.findAll();
  }

  async findOne(id: number) {
    return await this.organizationRespository.findOne(id);
  }

  async update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return await this.organizationRespository.update(id, updateOrganizationDto);
  }

  async remove(id: number) {
    return await this.organizationRespository.remove(id);
  }
}
