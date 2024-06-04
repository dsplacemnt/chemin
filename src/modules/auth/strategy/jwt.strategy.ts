import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../contants';
import { IncomingPayloadDto } from '../dto/incoming-payload.dto';
import { InsidePayloadDto } from '../dto/inside-payload.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(incomingPayload: IncomingPayloadDto): Promise<InsidePayloadDto> {
    const insidePayload = new InsidePayloadDto(incomingPayload.email, incomingPayload.sub);
    return insidePayload;
  }
}
