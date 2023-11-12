import { ApiProperty } from '@nestjs/swagger';

export class CreateMemoryDto {
  @ApiProperty()
  label: string;

  @ApiProperty()
  value: string;
}
