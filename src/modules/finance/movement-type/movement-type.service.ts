import { Injectable } from '@nestjs/common';
import { CreateMovementTypeDto } from './dto/create-movement-type.dto';
import { UpdateMovementTypeDto } from './dto/update-movement-type.dto';

@Injectable()
export class MovementTypeService {
  create(createMovementTypeDto: CreateMovementTypeDto) {
    return 'This action adds a new movementType';
  }

  findAll() {
    return `This action returns all movementType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movementType`;
  }

  update(id: number, updateMovementTypeDto: UpdateMovementTypeDto) {
    return `This action updates a #${id} movementType`;
  }

  remove(id: number) {
    return `This action removes a #${id} movementType`;
  }
}
