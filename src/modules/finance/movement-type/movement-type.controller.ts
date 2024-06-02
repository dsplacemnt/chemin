import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MovementTypeService } from './movement-type.service';
import { CreateMovementTypeDto } from './dto/create-movement-type.dto';
import { UpdateMovementTypeDto } from './dto/update-movement-type.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('movementType')
@ApiTags('movementType')
@ApiBearerAuth('JWT')
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
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.movementTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMovementTypeDto: UpdateMovementTypeDto) {
    return this.movementTypeService.update(id, updateMovementTypeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.movementTypeService.remove(id);
  }
}
