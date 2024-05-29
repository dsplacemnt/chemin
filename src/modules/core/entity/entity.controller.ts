import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EntityService } from './entity.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
import { EntityEntity } from './entity.entity';

@Controller('entity')
@ApiTags('entity')
export class EntityController {
  constructor(private readonly entityService: EntityService) {}

  @Post()
  @ApiCreatedResponse({ type: EntityEntity })
  create(@Body() createEntityDto: CreateEntityDto) {
    return this.entityService.create(createEntityDto);
  }

  @Get()
  @ApiOkResponse({ type: EntityEntity, isArray: true })
  findAll() {
    return this.entityService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: EntityEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.entityService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: EntityEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateEntityDto: UpdateEntityDto) {
    return this.entityService.update(id, updateEntityDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: EntityEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.entityService.remove(id);
  }
}
