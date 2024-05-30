import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { OrganizationModule } from './organization/organization.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [OrganizationModule, MemberModule, UserModule],
  controllers: [],
  providers: [],
})
export class CoreModule {}
