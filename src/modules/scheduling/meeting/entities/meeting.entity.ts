import { Meeting } from '@prisma/client';

export class MeetingEntity implements Meeting {
  id: number;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  organizationId: number;
  createdAt: Date;
  updatedAt: Date;
}
