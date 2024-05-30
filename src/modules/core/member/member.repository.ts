import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { MemberEntity } from './member.entity';
import { CreateMemberDto } from './dto/create-member.dto';
import { connect } from 'http2';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MemberRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createMemberDto: CreateMemberDto): Promise<MemberEntity> {
    const { organizationId, ...memberData } = createMemberDto;
    return await this.prismaService.member.create({
      data: { ...memberData, organization: { connect: { id: organizationId } } },
    });
  }

  async findAll(): Promise<MemberEntity[]> {
    const members = await this.prismaService.member.findMany();
    return members.map((member) => new MemberEntity(member));
  }

  async findOne(id: number): Promise<MemberEntity> {
    return await this.prismaService.member.findUnique({ where: { id } });
  }

  async update(id: number, updateMemberDto: UpdateMemberDto): Promise<MemberEntity> {
    return await this.prismaService.member.update({ where: { id }, data: updateMemberDto });
  }

  async remove(id: number): Promise<MemberEntity> {
    return await this.prismaService.member.delete({ where: { id } });
  }
}
