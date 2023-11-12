import { Module } from '@nestjs/common';
import { PriceTypesService } from './price-types.service';
import { PriceTypesController } from './price-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceType } from 'src/entities/priceType.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PriceType])],
  controllers: [PriceTypesController],
  providers: [PriceTypesService],
})
export class PriceTypesModule {}
