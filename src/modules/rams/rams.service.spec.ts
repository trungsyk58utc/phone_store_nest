import { Test, TestingModule } from '@nestjs/testing';
import { RamsService } from './rams.service';

describe('RamsService', () => {
  let service: RamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RamsService],
    }).compile();

    service = module.get<RamsService>(RamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
