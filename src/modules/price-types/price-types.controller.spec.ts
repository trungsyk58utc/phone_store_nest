import { Test, TestingModule } from '@nestjs/testing';
import { PriceTypesController } from './price-types.controller';
import { PriceTypesService } from './price-types.service';

describe('PriceTypesController', () => {
  let controller: PriceTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceTypesController],
      providers: [PriceTypesService],
    }).compile();

    controller = module.get<PriceTypesController>(PriceTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
