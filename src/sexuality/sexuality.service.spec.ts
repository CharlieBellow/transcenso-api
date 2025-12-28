import { Test, TestingModule } from '@nestjs/testing';
import { SexualityService } from './sexuality.service';

describe('SexualityService', () => {
  let service: SexualityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SexualityService],
    }).compile();

    service = module.get<SexualityService>(SexualityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
