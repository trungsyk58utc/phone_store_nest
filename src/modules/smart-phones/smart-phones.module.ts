import { Module } from '@nestjs/common';
import { SmartPhonesService } from './smart-phones.service';
import { SmartPhonesController } from './smart-phones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmartPhone } from 'src/entities/smartPhone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SmartPhone])],
  controllers: [SmartPhonesController],
  providers: [SmartPhonesService],
})
export class SmartPhonesModule {}
