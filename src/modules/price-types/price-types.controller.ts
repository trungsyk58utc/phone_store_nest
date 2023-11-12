import { Body, Controller, Get, Post } from '@nestjs/common';
import { PriceTypesService } from './price-types.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePriceTypeDto } from './dto/create-priceType.dto';

@Controller('price-types')
@ApiTags('price-type')
export class PriceTypesController {
  constructor(private readonly priceTypesService: PriceTypesService) {}

  @Get('/')
  getListMemory() {
    return this.priceTypesService.getListPriceType();
  }

  @Post('/')
  createMemory(@Body() createPriceTypeDto: CreatePriceTypeDto) {
    return this.priceTypesService.createPriceType(createPriceTypeDto);
  }
}
