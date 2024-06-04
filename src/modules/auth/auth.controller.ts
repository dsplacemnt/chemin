import { Controller, Post, UseGuards, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/modules/core/user/entities/user.entity';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { LoginUserDto } from './dto/loginUser.dto';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { InsidePayloadDto } from './dto/inside-payload.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: LoginUserDto })
  @Post('login')
  async login(userEntity: Partial<UserEntity>): Promise<{ access_token: string }> {
    return await this.authService.login(userEntity);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(payload: InsidePayloadDto) {
    return '';
  }
}
