import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../core/user/user.repository';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/modules/core/user/entities/user.entity';
import { LoginResponse } from './interface/login-response.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<Partial<UserEntity>> {
    const userEntity = await this.userRepository.findByEmail(email);
    if (!userEntity) {
      throw new UnauthorizedException();
    }
    const isMatch = await bcrypt.compare(password, userEntity.password);
    if (isMatch) {
      const { password, ...result } = userEntity;
      return result;
    }
    return null;
  }

  async login(userEntity: Partial<UserEntity>): Promise<LoginResponse> {
    const payload = { email: userEntity.email, sub: userEntity.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
