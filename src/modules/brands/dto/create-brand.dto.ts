import { ApiProperty } from '@nestjs/swagger';

export class CreateBrandDto {
  @ApiProperty()
  label: string;

  @ApiProperty()
  value: string;
}
