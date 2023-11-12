import { Test, TestingModule } from '@nestjs/testing';
import { SmartPhonesService } from './smart-phones.service';

describe('SmartPhonesService', () => {
  let service: SmartPhonesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmartPhonesService],
    }).compile();

    service = module.get<SmartPhonesService>(SmartPhonesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
