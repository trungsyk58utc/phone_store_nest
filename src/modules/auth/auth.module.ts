import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from 'src/entities/staff.entity';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { RefreshJwtStrategy } from './strategy/refresh.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Staff]),
    PassportModule.register({ defaultStrategy: 'local' }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, RefreshJwtStrategy, JwtService],
})
export class AuthModule {}
