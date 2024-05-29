import { Injectable } from '@nestjs/common';
import { MemberEntity } from './member.entity';
import { BaseCrudService } from 'src/common/base/base-crud.service';

@Injectable()
export class MemberService extends BaseCrudService<MemberEntity> {}
