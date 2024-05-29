import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { BaseCrudRepository } from 'src/common/base/base-crud.repository';
import { BaseCrudService } from 'src/common/base/base-crud.service';

@Module({
  controllers: [MemberController],
  providers: [MemberService, BaseCrudService, BaseCrudRepository],
})
export class MemberModule {}
