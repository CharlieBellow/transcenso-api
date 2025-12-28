import { Test, TestingModule } from '@nestjs/testing';
import { SexualityController } from './sexuality.controller';
import { SexualityService } from './sexuality.service';

describe('SexualityController', () => {
  let controller: SexualityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SexualityController],
      providers: [SexualityService],
    }).compile();

    controller = module.get<SexualityController>(SexualityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
