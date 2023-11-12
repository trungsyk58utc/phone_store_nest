import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { DEFAULTCONFIG } from 'src/config/defaultConfig';

interface ValidateRefreshTokenPayLoad {
  id: number;
  firstName: string;
  lastName: string;
}

export class RefreshJwtStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refreshToken'),
      ignoreExpiration: false,
      secretOrKey: `${DEFAULTCONFIG.refreshTokenSecretKey}`,
    });
  }

  async validate(payload: ValidateRefreshTokenPayLoad) {
    return payload;
  }
}
