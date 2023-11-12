import { Body, Controller, Get, Post } from '@nestjs/common';
import { MemoriesService } from './memories.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateMemoryDto } from './dto/create-memory.dto';

@Controller('memories')
@ApiTags('memory')
export class MemoriesController {
  constructor(private readonly memoriesService: MemoriesService) {}

  @Get('/')
  getListMemory() {
    return this.memoriesService.getListMemory();
  }

  @Post('/')
  createMemory(@Body() createMemoryDto: CreateMemoryDto) {
    return this.memoriesService.createMemory(createMemoryDto);
  }
}
