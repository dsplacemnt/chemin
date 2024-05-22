import { Module } from '@nestjs/common';
import { MovementModule } from './movement/movement.module';

@Module({
  imports: [MovementModule],
  controllers: [],
  providers: [],
})
export class FinanceModule {}
