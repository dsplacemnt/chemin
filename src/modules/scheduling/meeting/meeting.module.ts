import { Module } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MeetingController } from './meeting.controller';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { MeetingRepository } from './meeting.repository';

@Module({
  controllers: [MeetingController],
  providers: [MeetingService, MeetingRepository, PrismaService],
})
export class MeetingModule {}
