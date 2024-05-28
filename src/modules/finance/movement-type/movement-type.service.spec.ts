import { Test, TestingModule } from '@nestjs/testing';
import { MovementTypeService } from './movement-type.service';

describe('MovementTypeService', () => {
  let service: MovementTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovementTypeService],
    }).compile();

    service = module.get<MovementTypeService>(MovementTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
