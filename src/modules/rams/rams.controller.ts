import { Body, Controller, Get, Post } from '@nestjs/common';
import { RamsService } from './rams.service';
import { CreateRamDto } from './dto/create-ram.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('rams')
@ApiTags('ram')
export class RamsController {
  constructor(private readonly ramsService: RamsService) {}

  @Get('/')
  getListMemory() {
    return this.ramsService.getListRam();
  }

  @Post('/')
  createMemory(@Body() createRamDto: CreateRamDto) {
    return this.ramsService.createRam(createRamDto);
  }
}
