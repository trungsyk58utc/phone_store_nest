import { Test, TestingModule } from '@nestjs/testing';
import { PriceTypesService } from './price-types.service';

describe('PriceTypesService', () => {
  let service: PriceTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceTypesService],
    }).compile();

    service = module.get<PriceTypesService>(PriceTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
