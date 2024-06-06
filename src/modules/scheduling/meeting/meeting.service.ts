import { Injectable } from '@nestjs/common';
import { MeetingRepository } from './meeting.repository';

@Injectable()
export class MeetingService {
  constructor(private readonly meetingRepository: MeetingRepository) {}
}
