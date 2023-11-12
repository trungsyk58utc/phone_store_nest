import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { DEFAULTCONFIG } from 'src/config/defaultConfig';

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: `${DEFAULTCONFIG.accessTokenSecretKey}`,
    });
  }

  async validate(payload: any) {
    return payload;
  }
}
