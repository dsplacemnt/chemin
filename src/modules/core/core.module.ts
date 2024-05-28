import { Module } from '@nestjs/common';
import { EntityModule } from './entity/entity.module';

@Module({
  imports: [EntityModule],
  controllers: [],
  providers: [],
})
export class CoreModule {}
