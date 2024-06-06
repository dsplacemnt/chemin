import { Controller, Post, UseGuards, Body, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { LoginUserDto } from './dto/loginUser.dto';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { InsidePayloadDto } from './dto/inside-payload.dto';
import { RequestWithUser } from './interface/user-request.inteface';
import { LoginResponse } from './interface/login-response.interface';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: LoginUserDto })
  @Post('login')
  login(@Req() requestWithUser: RequestWithUser): Promise<LoginResponse> {
    return this.authService.login(requestWithUser.user);
  }
}
