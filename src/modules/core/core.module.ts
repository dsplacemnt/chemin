import { Module } from '@nestjs/common';
import { EntityModule } from './entity/entity.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [EntityModule, MemberModule],
  controllers: [],
  providers: [],
})
export class CoreModule {}
