import { Module } from '@nestjs/common';
import { MovementModule } from './movement/movement.module';
import { MovementTypeModule } from './movement-type/movement-type.module';

@Module({
  imports: [MovementModule, MovementTypeModule],
  controllers: [],
  providers: [],
})
export class FinanceModule {}
