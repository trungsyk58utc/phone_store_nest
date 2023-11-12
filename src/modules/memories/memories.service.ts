import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Memory } from 'src/entities/memory.entity';
import { Repository, EntityManager } from 'typeorm';
import { CreateMemoryDto } from './dto/create-memory.dto';

@Injectable()
export class MemoriesService {
  constructor(
    @InjectRepository(Memory)
    private readonly memoryRepository: Repository<Memory>,
    private readonly entityManager: EntityManager,
  ) {}

  async getListMemory() {
    return await this.memoryRepository.find();
  }

  async createMemory(@Body() createMemoryDto: CreateMemoryDto) {
    const newMemory = new Memory(createMemoryDto);
    await this.entityManager.save(newMemory);
    return newMemory;
  }
}
