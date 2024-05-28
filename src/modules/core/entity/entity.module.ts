import { Module } from '@nestjs/common';
import { EntityController } from './entity.controller';
import { EntityService } from './entity.service';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  controllers: [EntityController],
  providers: [EntityService, PrismaService],
})
export class EntityModule {}
