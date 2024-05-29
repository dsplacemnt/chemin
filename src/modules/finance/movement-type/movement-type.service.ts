import { Injectable } from '@nestjs/common';
import { MovementTypeEntity } from './movement-type.entity';
import { BaseCrudService } from 'src/common/base/base-crud.service';

@Injectable()
export class MovementTypeService extends BaseCrudService<MovementTypeEntity> {}
