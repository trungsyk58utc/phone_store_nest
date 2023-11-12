import {
  Body,
  Injectable,
  UnauthorizedException,
  Request,
} from '@nestjs/common';
import { Staff } from 'src/entities/staff.entity';
import { EntityManager, Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { DEFAULTCONFIG } from 'src/config/defaultConfig';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Staff)
    private readonly staffRepository: Repository<Staff>,
    private readonly entityManager: EntityManager,
    private readonly jwtService: JwtService,
  ) {}

  async login(@Request() req) {
    const staffData = new Staff(req.user);
    return await this.getToken(
      {
        id: staffData.id,
        firstName: staffData.firstName,
        lastName: staffData.lastName,
      },
      'login',
    );
  }

  async register(@Body() registerData: RegisterDto) {
    const { account } = registerData;
    const staff = await this.staffRepository.findOne({ where: { account } });
    if (!staff) {
      const newStaff = new Staff(registerData);
      await this.entityManager.save(newStaff);
      return plainToInstance(RegisterDto, newStaff);
    }
    throw new UnauthorizedException('Account has already exist');
  }

  async refreshToken(@Request() req) {
    return await this.getToken(
      {
        id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        expiredIn: req.user.exp,
      },
      'refresh',
    );
  }

  async validateUser(@Body() loginData: LoginDto) {
    const { account, password } = loginData;
    const user = await this.staffRepository.findOne({ where: { account } });
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async getToken(staffData: any, type: string) {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const expiresIn = staffData.expiredIn - currentTimestamp;
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(staffData, {
        secret: DEFAULTCONFIG.accessTokenSecretKey,
        expiresIn: '30m',
      }),
      this.jwtService.signAsync(staffData, {
        secret: DEFAULTCONFIG.refreshTokenSecretKey,
        expiresIn: type === 'refresh' ? expiresIn : '5d',
      }),
    ]);

    return { accessToken, refreshToken };
  }
}
