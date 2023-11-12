import { Test, TestingModule } from '@nestjs/testing';
import { SmartPhonesController } from './smart-phones.controller';
import { SmartPhonesService } from './smart-phones.service';

describe('SmartPhonesController', () => {
  let controller: SmartPhonesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmartPhonesController],
      providers: [SmartPhonesService],
    }).compile();

    controller = module.get<SmartPhonesController>(SmartPhonesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
