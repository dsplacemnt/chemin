import { Injectable } from '@nestjs/common';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { MovementRepository } from './movement.repository';

@Injectable()
export class MovementService {
  constructor(private movementRespository: MovementRepository) {}

  async create(createMovementDto: CreateMovementDto) {
    return await this.movementRespository.create(createMovementDto);
  }

  async findAll() {
    return await this.movementRespository.findAll();
  }

  async findOne(id: number) {
    return await this.movementRespository.findOne(id);
  }

  async update(id: number, updateMovementDto: UpdateMovementDto) {
    return await this.movementRespository.update(id, updateMovementDto);
  }

  async remove(id: number) {
    return await this.movementRespository.remove(id);
  }
}
