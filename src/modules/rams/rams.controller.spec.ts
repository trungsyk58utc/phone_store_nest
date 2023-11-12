import { Test, TestingModule } from '@nestjs/testing';
import { RamsController } from './rams.controller';
import { RamsService } from './rams.service';

describe('RamsController', () => {
  let controller: RamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RamsController],
      providers: [RamsService],
    }).compile();

    controller = module.get<RamsController>(RamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
