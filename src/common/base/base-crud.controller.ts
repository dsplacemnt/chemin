import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BaseCrudService } from './base-crud.service';

@Controller()
export class BaseCrudController<T> {
  constructor(private readonly baseCrudService: BaseCrudService<T>) {}

  async create(@Body() dto: T): Promise<T> {
    return this.baseCrudService.create(dto);
  }

  @Get()
  async findAll(): Promise<T[]> {
    return this.baseCrudService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<T> {
    return this.baseCrudService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() dto: T): Promise<T> {
    return this.baseCrudService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<T> {
    return this.baseCrudService.remove(id);
  }
}
