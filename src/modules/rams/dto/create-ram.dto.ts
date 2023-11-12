import { ApiProperty } from '@nestjs/swagger';

export class CreateRamDto {
  @ApiProperty()
  label: string;

  @ApiProperty()
  value: string;
}
