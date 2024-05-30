import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { MemberRepository } from './member.repository';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Module({
  controllers: [MemberController],
  providers: [MemberService, MemberRepository, PrismaService],
})
export class MemberModule {}
