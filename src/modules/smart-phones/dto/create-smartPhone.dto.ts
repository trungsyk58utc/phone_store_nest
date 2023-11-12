import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSmartPhoneDto {
  @IsString()
  @ApiProperty()
  model: string;

  @ApiProperty()
  price: string;

  @ApiProperty()
  brandId: number;

  @ApiProperty()
  colorId: number;

  @ApiProperty()
  memoryId: number;

  @ApiProperty()
  ramId: number;

  @ApiProperty()
  priceTypeId: number;
}
