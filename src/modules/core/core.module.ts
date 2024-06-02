import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { OrganizationModule } from './organization/organization.module';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [OrganizationModule, MemberModule, UserModule, RoleModule],
  controllers: [],
  providers: [],
})
export class CoreModule {}
