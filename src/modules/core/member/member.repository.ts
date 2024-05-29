import { BaseCrudRepository } from 'src/common/base/base-crud.repository';
import { MemberEntity } from './member.entity';

export class MemberRepository extends BaseCrudRepository<MemberEntity> {}
