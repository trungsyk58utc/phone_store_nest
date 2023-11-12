import { Body, Controller, Get, Post } from '@nestjs/common';
import { SmartPhonesService } from './smart-phones.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateSmartPhoneDto } from './dto/create-smartPhone.dto';

@Controller('smart-phones')
@ApiTags('smartPhone')
export class SmartPhonesController {
  constructor(private readonly smartPhonesService: SmartPhonesService) {}

  @Get('/')
  getListPhone() {
    return this.smartPhonesService.getListPhone();
  }

  @Post('/')
  createPhone(@Body() createPhoneDto: CreateSmartPhoneDto) {
    return this.smartPhonesService.createPhone(createPhoneDto);
  }
}
