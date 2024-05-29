import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class BaseCrudRepository<T, genericClassName> {
  constructor(
    private readonly prisma: PrismaService,
    protected genericClassName: string,
  ) {}

  async create(dto: T): Promise<T> {
    return this.prisma[this.genericClassName].create({ data: dto });
  }

  async findAll(): Promise<T[]> {
    return this.prisma[this.genericClassName].findMany();
  }

  async findOne(id: number): Promise<T> {
    return this.prisma[this.genericClassName].findUnique(id);
  }

  async update(id: number, dto: T): Promise<T> {
    return this.prisma[this.genericClassName].update(id, dto);
  }

  async remove(id: number): Promise<T> {
    return this.prisma[this.genericClassName].delete(id);
  }
}
