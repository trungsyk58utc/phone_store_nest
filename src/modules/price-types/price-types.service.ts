import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PriceType } from 'src/entities/priceType.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreatePriceTypeDto } from './dto/create-priceType.dto';

@Injectable()
export class PriceTypesService {
  constructor(
    @InjectRepository(PriceType)
    private readonly priceTypeRepository: Repository<PriceType>,
    private readonly entityManager: EntityManager,
  ) {}

  async getListPriceType() {
    return await this.priceTypeRepository.find();
  }

  async createPriceType(@Body() createPriceTypeDto: CreatePriceTypeDto) {
    const newPriceType = new PriceType(createPriceTypeDto);
    await this.entityManager.save(newPriceType);
    return newPriceType;
  }
}
