import { Body, Controller, Get, Post } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateColorDto } from './dto/create-color.dto';

@Controller('colors')
@ApiTags('color')
export class ColorsController {
  constructor(private readonly colorsService: ColorsService) {}

  @Get('/')
  getColor() {
    return this.colorsService.getListColor();
  }

  @Post('/')
  createColor(@Body() createColorDto: CreateColorDto) {
    return this.colorsService.createColor(createColorDto);
  }
}
