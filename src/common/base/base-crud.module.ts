import { Module } from '@nestjs/common';
import { BaseCrudRepository } from 'src/common/base/base-crud.repository';
import { BaseCrudService } from 'src/common/base/base-crud.service';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { BaseCrudController } from './base-crud.controller';

@Module({
  providers: [PrismaService],
  exports: [BaseCrudController, BaseCrudService, BaseCrudRepository],
})
export class MemberModule {}
