import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.prismaService.user.create({ data: createUserDto });
  }
  findAll(): Promise<UserEntity[]> {
    return this.prismaService.user.findMany();
  }
  findOne(id: number): Promise<UserEntity> {
    return this.prismaService.user.findUnique({ where: { id } });
  }
  update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.prismaService.user.update({ where: { id }, data: updateUserDto });
  }
  remove(id: number): Promise<UserEntity> {
    return this.prismaService.user.delete({ where: { id } });
  }
}
