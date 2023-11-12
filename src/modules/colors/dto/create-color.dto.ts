import { ApiProperty } from '@nestjs/swagger';

export class CreateColorDto {
  @ApiProperty()
  label: string;

  @ApiProperty()
  value: string;
}
