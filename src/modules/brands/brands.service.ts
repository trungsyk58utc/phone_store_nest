import { Body, Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from 'src/entities/brand.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { plainToInstance } from 'class-transformer';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
    private readonly entityManager: EntityManager,
  ) {}

  async listBrand() {
    const listBrand = await this.brandRepository.find();
    return listBrand;
  }

  async createBrand(@Body() createBrandDto: CreateBrandDto) {
    const { value } = createBrandDto;
    const existBrand = await this.brandRepository.findOne({ where: { value } });
    if (existBrand) {
      throw new NotAcceptableException('Brand has exist');
    } else {
      try {
        const newBrand = new Brand(createBrandDto);
        const saveBrand = await this.entityManager.save(newBrand);
        return plainToInstance(CreateBrandDto, saveBrand);
      } catch (error) {
        throw new ExceptionsHandler(error);
      }
    }
  }
}
