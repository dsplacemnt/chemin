import { Module } from '@nestjs/common';
import { MovementService } from './movement.service';
import { MovementController } from './movement.controller';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { MovementRepository } from './movement.repository';

@Module({
  controllers: [MovementController],
  providers: [MovementService, MovementRepository, PrismaService],
})
export class MovementModule {}
