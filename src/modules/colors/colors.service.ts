import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Color } from 'src/entities/color.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreateColorDto } from './dto/create-color.dto';

@Injectable()
export class ColorsService {
  constructor(
    @InjectRepository(Color)
    private readonly colorRepository: Repository<Color>,
    private readonly entityManager: EntityManager,
  ) {}

  async getListColor() {
    const listColor = this.colorRepository.find();
    return listColor;
  }

  async createColor(@Body() createColorDto: CreateColorDto) {
    const newColor = new Color(createColorDto);
    await this.entityManager.save(newColor);
    return newColor;
  }
}
