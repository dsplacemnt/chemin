import { Injectable } from '@nestjs/common';
import { BaseCrudRepository } from './base-crud.repository';

@Injectable()
export class BaseCrudService<T> {
  constructor(private readonly baseCrudRepository: BaseCrudRepository<T, 'a'>) {}

  async create(dto: T): Promise<T> {
    return this.baseCrudRepository.create(dto);
  }

  async findAll(): Promise<T[]> {
    return this.baseCrudRepository.findAll();
  }

  async findOne(id: number): Promise<T> {
    return this.baseCrudRepository.findOne(id);
  }

  async update(id: number, dto: T): Promise<T> {
    return this.baseCrudRepository.update(id, dto);
  }

  async remove(id: number): Promise<T> {
    return this.baseCrudRepository.remove(id);
  }
}
