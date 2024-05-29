import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MovementTypeEntity } from './movement-type.entity';
import { BaseCrudController } from 'src/common/base/base-crud.controller';
@Controller('movement-type')
@ApiTags('movement-type')
export class MovementTypeController extends BaseCrudController<MovementTypeEntity> {}
