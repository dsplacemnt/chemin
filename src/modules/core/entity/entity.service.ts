import { Injectable } from '@nestjs/common';
import { EntityRepository } from './entity.repository';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
import { EntityEntity } from './entity.entity';

@Injectable()
export class EntityService {
  constructor(private entityRepository: EntityRepository) {}

  async create(createEntityDto: CreateEntityDto): Promise<EntityEntity> {
    return await this.entityRepository.create(createEntityDto);
  }

  async findAll(): Promise<EntityEntity[]> {
    return await this.entityRepository.findAll();
  }

  async findOne(id: number): Promise<EntityEntity> {
    return await this.entityRepository.findOne(id);
  }

  async update(id: number, updateEntityDto: UpdateEntityDto): Promise<EntityEntity> {
    return await this.entityRepository.update(id, updateEntityDto);
  }

  async remove(id: number): Promise<EntityEntity> {
    return await this.entityRepository.remove(id);
  }
}
