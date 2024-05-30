import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { OrganizationRepository } from './organization.repository';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  controllers: [OrganizationController],
  providers: [OrganizationService, OrganizationRepository, PrismaService],
})
export class OrganizationModule {}
