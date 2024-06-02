import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { MemberEntity } from './member.entity';

@Controller('member')
@ApiTags('member')
@ApiBearerAuth('JWT')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  create(@Body() createMemberDto: CreateMemberDto): Promise<MemberEntity> {
    return this.memberService.create(createMemberDto);
  }

  @Get()
  findAll(): Promise<MemberEntity[]> {
    return this.memberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<MemberEntity> {
    return this.memberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMemberDto: UpdateMemberDto): Promise<MemberEntity> {
    return this.memberService.update(id, updateMemberDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<MemberEntity> {
    return this.memberService.remove(id);
  }
}
