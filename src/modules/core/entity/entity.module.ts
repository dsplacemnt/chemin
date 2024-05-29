import { Module } from '@nestjs/common';
import { EntityController } from './entity.controller';
import { EntityService } from './entity.service';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { EntityRepository } from './entity.repository';

@Module({
  controllers: [EntityController],
  providers: [EntityService, EntityRepository, PrismaService],
})
export class EntityModule {}
