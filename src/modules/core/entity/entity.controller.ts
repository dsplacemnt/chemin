import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityService } from './entity.service';
import { ApiTags } from '@nestjs/swagger';
import { Entity } from './entity.model';

@ApiTags('entity')
@Controller('entity')
export class EntityController {
  constructor(private readonly entityService: EntityService) {}

  @Post()
  create(@Body() entity: Entity) {
    return this.entityService.create(entity);
  }

  @Get()
  findAll() {
    return this.entityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() entity: Entity) {
    return this.entityService.update(+id, entity);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityService.remove(+id);
  }
}
