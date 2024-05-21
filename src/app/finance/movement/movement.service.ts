import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateMovementDto } from './dto/createMovement.dto';
import { UpdateMovementDto } from './dto/updateMovement.dto';


@Injectable()
export class MovementService {
    constructor(private prisma: PrismaService) {}

    async create(createMovementDto: CreateMovementDto) {
        return 'This action adds a new movement';
    }

    async findAll() {
        return `This action returns all movement`;
    }

    async findOne(id: number) {
        return `This action returns a #${id} movement`;
    }

    async update(id: number, updateMovementDto: UpdateMovementDto) {
        return `This action updates a #${id} movement`;
    }

    async remove(id: number) {
        return `This action removes a #${id} movement`;
    }

}