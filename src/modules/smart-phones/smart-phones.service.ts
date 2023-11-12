import { Body, Injectable } from '@nestjs/common';
import { CreateSmartPhoneDto } from './dto/create-smartPhone.dto';
import { EntityManager, Repository } from 'typeorm';
import { SmartPhone } from 'src/entities/smartPhone.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class SmartPhonesService {
  constructor(
    @InjectRepository(SmartPhone)
    private readonly smartPhoneRepository: Repository<SmartPhone>,
    private readonly entityManager: EntityManager,
  ) {}

  async getListPhone() {
    return await this.smartPhoneRepository.find({
      relations: ['brand', 'ram', 'color', 'memory', 'priceType'],
      select: ['id', 'brand', 'color', 'memory', 'model', 'price', 'priceType'],
    });
  }

  async createPhone(@Body() createPhoneDto: CreateSmartPhoneDto) {
    const newPhone = new SmartPhone(createPhoneDto);
    const savePhone = this.entityManager.save(newPhone);
    return plainToInstance(CreateSmartPhoneDto, savePhone);
  }
}
