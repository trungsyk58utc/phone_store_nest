import { Module } from '@nestjs/common';
import { RamsService } from './rams.service';
import { RamsController } from './rams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ram } from 'src/entities/ram.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ram])],
  controllers: [RamsController],
  providers: [RamsService],
})
export class RamsModule {}
