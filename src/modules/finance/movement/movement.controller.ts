import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MovementService } from './movement.service';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MovementEntity } from './movement.entity';

@Controller('movement')
@ApiTags('movement')
export class MovementController {
  constructor(private readonly movementService: MovementService) {}

  @Post()
  @ApiCreatedResponse({ type: MovementEntity })
  async create(@Body() createMovementDto: CreateMovementDto): Promise<MovementEntity> {
    return await this.movementService.create(createMovementDto);
  }

  @Get()
  @ApiOkResponse({ isArray: true, type: MovementEntity })
  findAll(): Promise<MovementEntity[]> {
    return this.movementService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: MovementEntity })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<MovementEntity> {
    return this.movementService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: MovementEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMovementDto: UpdateMovementDto): Promise<MovementEntity> {
    return this.movementService.update(id, updateMovementDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MovementEntity })
  remove(@Param('id', ParseIntPipe) id: number): Promise<MovementEntity> {
    return this.movementService.remove(id);
  }
}
