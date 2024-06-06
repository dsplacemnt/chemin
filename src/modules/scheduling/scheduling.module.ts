import { Module } from '@nestjs/common';
import { MeetingModule } from './meeting/meeting.module';

@Module({
  imports: [MeetingModule],
})
export class SchedulingModule {}
