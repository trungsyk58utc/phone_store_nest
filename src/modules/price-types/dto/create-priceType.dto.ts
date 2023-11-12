import { ApiProperty } from '@nestjs/swagger';

export class CreatePriceTypeDto {
  @ApiProperty()
  label: string;

  @ApiProperty()
  value: string;
}
