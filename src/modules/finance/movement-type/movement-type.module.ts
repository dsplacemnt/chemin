import { Module } from '@nestjs/common';
import { MovementTypeService } from './movement-type.service';
import { MovementTypeController } from './movement-type.controller';
import { BaseCrudService } from 'src/common/base/base-crud.service';
import { BaseCrudRepository } from 'src/common/base/base-crud.repository';

@Module({
  imports: [],
  controllers: [MovementTypeController],
  providers: [MovementTypeService, BaseCrudService, BaseCrudRepository],
})
export class MovementTypeModule {}
