import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OrganizationService } from './organization.service';
import { OrganizationEntity } from './entities/organization.entity';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Controller('organization')
@ApiTags('organization')
@ApiBearerAuth('JWT')
export class OrganizationController {
  constructor(private readonly movementService: OrganizationService) {}

  @Post()
  @ApiCreatedResponse({ type: OrganizationEntity })
  async create(@Body() createOrganizationDto: CreateOrganizationDto): Promise<OrganizationEntity> {
    return await this.movementService.create(createOrganizationDto);
  }

  @Get()
  @ApiOkResponse({ isArray: true, type: OrganizationEntity })
  findAll(): Promise<OrganizationEntity[]> {
    return this.movementService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: OrganizationEntity })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<OrganizationEntity> {
    return this.movementService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: OrganizationEntity })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateOrganizationDto: UpdateOrganizationDto,
  ): Promise<OrganizationEntity> {
    return this.movementService.update(id, UpdateOrganizationDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: OrganizationEntity })
  remove(@Param('id', ParseIntPipe) id: number): Promise<OrganizationEntity> {
    return this.movementService.remove(id);
  }
}
