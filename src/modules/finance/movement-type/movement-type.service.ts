import { Injectable } from '@nestjs/common';
import { CreateMovementTypeDto } from './dto/create-movement-type.dto';
import { UpdateMovementTypeDto } from './dto/update-movement-type.dto';
import { MovementTypeRepository } from './movement-type.repository';

@Injectable()
export class MovementTypeService {
  constructor(private readonly movementTypeRepository: MovementTypeRepository) {}

  create(createMovementTypeDto: CreateMovementTypeDto) {
    return this.movementTypeRepository.create(createMovementTypeDto);
  }

  findAll() {
    return this.movementTypeRepository.findAll();
  }

  findOne(id: number) {
    return this.movementTypeRepository.findOne(id);
  }

  update(id: number, updateMovementTypeDto: UpdateMovementTypeDto) {
    return this.movementTypeRepository.update(id, updateMovementTypeDto);
  }

  remove(id: number) {
    return this.movementTypeRepository.remove(id);
  }
}
