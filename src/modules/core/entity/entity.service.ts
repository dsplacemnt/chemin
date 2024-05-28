import { Injectable } from '@nestjs/common';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
import { EntityRepository } from './entity.repository';

@Injectable()
export class EntityService {
  constructor(private entityRepository: EntityRepository) {}

  create(createEntityDto: CreateEntityDto) {
    return this.entityRepository.create(createEntityDto);
  }

  findAll() {
    return this.entityRepository.findAll();
  }

  findOne(id: number) {
    return this.entityRepository.findOne(id);
  }

  update(id: number, updateEntityDto: UpdateEntityDto) {
    return this.entityRepository.update(id, updateEntityDto);
  }

  remove(id: number) {
    return this.entityRepository.remove(id);
  }
}
