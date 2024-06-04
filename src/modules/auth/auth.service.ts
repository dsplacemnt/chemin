import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../core/user/user.repository';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/modules/core/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<Partial<UserEntity>> {
    const userEntity = await this.userRepository.findByEmail(email);
    if (userEntity && userEntity.password === password) {
      const { password, ...result } = userEntity;
      return result;
    }
    return null;
  }

  async login(userEntity: Partial<UserEntity>): Promise<{ access_token: string }> {
    const payload = { email: userEntity.email, sub: userEntity.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
