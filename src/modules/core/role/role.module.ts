import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { RoleRepository } from './role.repository';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  controllers: [RoleController],
  providers: [PrismaService, RoleService, RoleRepository],
})
export class RoleModule {}
