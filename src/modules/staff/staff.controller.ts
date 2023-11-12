import { Controller, Get, UseGuards } from '@nestjs/common';
import { StaffService } from './staff.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('staff')
@Controller('staff')
@UseGuards(JwtGuard)
@ApiBearerAuth('Authorization')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get('/listStaff')
  listStaff() {
    return this.staffService.getListStaff();
  }
}
