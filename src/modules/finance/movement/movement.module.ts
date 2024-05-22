import { Module } from '@nestjs/common';
import { MovementService } from './movement.service';
import { MovementController } from './movement.controller';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  controllers: [MovementController],
  providers: [MovementService, PrismaService],
})
export class MovementModule {}
