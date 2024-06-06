import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    try {
      const { roleId, ...data } = createUserDto;
      data.password = await bcrypt.hash(data.password, 10);
      return await this.prismaService.user.create({ data: { ...data, roles: { connect: { id: roleId } } } });
    } catch (error) {
      throw new BadRequestException();
    }
  }
  async findAll(): Promise<UserEntity[]> {
    return await this.prismaService.user.findMany();
  }
  async findOne(id: number): Promise<UserEntity> {
    return await this.prismaService.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return await this.prismaService.user.update({ where: { id }, data: updateUserDto });
  }
  async remove(id: number): Promise<UserEntity> {
    return await this.prismaService.user.delete({ where: { id } });
  }
  async findByEmail(email: string): Promise<UserEntity> {
    return await this.prismaService.user.findUnique({ where: { email } });
  }
}
