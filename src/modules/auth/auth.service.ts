import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../core/user/user.repository';
import { SignInDto } from './dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<{ accessToken: string }> {
    const userEntity = await this.userRepository.findUserByEmail(signInDto.email);
    if (userEntity?.password !== signInDto.password) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = userEntity;
    const payload = { sub: result.id, email: result.email };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }
}
