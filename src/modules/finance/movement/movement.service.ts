import { Injectable } from '@nestjs/common';
import { MovementRepository } from './movement.repository';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { MovementEntity } from './entities/movement.entity';

@Injectable()
export class MovementService {
  constructor(private movementRespository: MovementRepository) {}

  async create(createMovementDto: CreateMovementDto): Promise<MovementEntity> {
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
