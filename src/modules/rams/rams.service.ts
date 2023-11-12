import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ram } from 'src/entities/ram.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreateRamDto } from './dto/create-ram.dto';

@Injectable()
export class RamsService {
  constructor(
    @InjectRepository(Ram)
    private readonly ramRepository: Repository<Ram>,
    private readonly entityManager: EntityManager,
  ) {}

  async getListRam() {
    return await this.ramRepository.find();
  }

  async createRam(@Body() createRamDto: CreateRamDto) {
    const newRam = new Ram(createRamDto);
    await this.entityManager.save(newRam);
    return newRam;
  }
}
