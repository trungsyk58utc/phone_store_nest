import { Body, Controller, Get, Post } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('brands')
@ApiTags('brand')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Get('/')
  getBrand() {
    return this.brandsService.listBrand();
  }

  @Post('/')
  createBrand(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.createBrand(createBrandDto);
  }
}
