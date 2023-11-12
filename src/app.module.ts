import { Module } from '@nestjs/common';
import { StaffModule } from './modules/staff/staff.module';
import { SmartPhonesModule } from './modules/smart-phones/smart-phones.module';
import { ColorsModule } from './modules/colors/colors.module';
import { BrandsModule } from './modules/brands/brands.module';
import { MemoriesModule } from './modules/memories/memories.module';
import { RamsModule } from './modules/rams/rams.module';
import { PriceTypesModule } from './modules/price-types/price-types.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    StaffModule,
    SmartPhonesModule,
    ColorsModule,
    BrandsModule,
    MemoriesModule,
    RamsModule,
    PriceTypesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
