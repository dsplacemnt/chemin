import { Module } from '@nestjs/common';
import { MovementTypeService } from './movement-type.service';
import { MovementTypeController } from './movement-type.controller';

@Module({
  controllers: [MovementTypeController],
  providers: [MovementTypeService],
})
export class MovementTypeModule {}
