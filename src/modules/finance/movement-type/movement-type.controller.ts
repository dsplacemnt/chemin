import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovementTypeService } from './movement-type.service';
import { CreateMovementTypeDto } from './dto/create-movement-type.dto';
import { UpdateMovementTypeDto } from './dto/update-movement-type.dto';

@Controller('movement-type')
export class MovementTypeController {
  constructor(private readonly movementTypeService: MovementTypeService) {}

  @Post()
  create(@Body() createMovementTypeDto: CreateMovementTypeDto) {
    return this.movementTypeService.create(createMovementTypeDto);
  }

  @Get()
  findAll() {
    return this.movementTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movementTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovementTypeDto: UpdateMovementTypeDto) {
    return this.movementTypeService.update(+id, updateMovementTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movementTypeService.remove(+id);
  }
}
