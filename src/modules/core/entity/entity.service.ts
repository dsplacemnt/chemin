import { Injectable } from '@nestjs/common';
import { EntityRepository } from './entity.repository';
import { Entity } from './entity.model';

@Injectable()
export class EntityService {
  constructor(private entityRepository: EntityRepository) {}

  create(entity: Entity) {
    return this.entityRepository.create(entity);
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
