import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { RefreshTokenDto } from './dto/refreshToken.dto';
import { Staff } from 'src/entities/staff.entity';
import { RefreshJwtGuard } from './guards/refresh-jwt-auth.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Body() loginDto: LoginDto, @Request() req) {
    return this.authService.login(req);
  }

  @Post('/register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(RefreshJwtGuard)
  @Post('/refreshToken')
  refreshToken(
    @Body() refreshTokenDto: RefreshTokenDto,
    @Request() req: Staff,
  ) {
    return this.authService.refreshToken(req);
  }
}
