import { Injectable } from '@nestjs/common';
import { MemberEntity } from './member.entity';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { MemberRepository } from './member.repository';

@Injectable()
export class MemberService {
  constructor(private readonly memberRepository: MemberRepository) {}

  create(createMemberDto: CreateMemberDto): Promise<MemberEntity> {
    return this.memberRepository.create(createMemberDto);
  }

  findAll(): Promise<MemberEntity[]> {
    return this.memberRepository.findAll();
  }

  findOne(id: number): Promise<MemberEntity> {
    return this.memberRepository.findOne(id);
  }

  update(id: number, updateMemberDto: UpdateMemberDto): Promise<MemberEntity> {
    return this.memberRepository.update(id, updateMemberDto);
  }

  remove(id: number): Promise<MemberEntity> {
    return this.memberRepository.remove(id);
  }
}
