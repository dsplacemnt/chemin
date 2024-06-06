import { Module } from '@nestjs/common';
import { MovementTypeService } from './movement-type.service';
import { MovementTypeController } from './movement-type.controller';
import { MovementTypeRepository } from './movement-type.repository';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  controllers: [MovementTypeController],
  providers: [MovementTypeService, MovementTypeRepository, PrismaService],
})
export class MovementTypeModule {}
