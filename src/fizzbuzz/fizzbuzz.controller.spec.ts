import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzController } from './fizzbuzz.controller';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzController', () => {
  let controller: FizzbuzzController;
  let service: FizzbuzzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FizzbuzzController],
      providers: [FizzbuzzService],
    }).compile();

    controller = module.get<FizzbuzzController>(FizzbuzzController);
    service = module.get<FizzbuzzService>(FizzbuzzService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should return the correct Fizz Buzz word accordinf the inroduced number (Using spyOn)', () => {
    const result = 'Fizz';
    jest.spyOn(service, 'fizzbuzz').mockImplementation(() => result);
    expect(controller.getFizzbuzz('3')).toBe(result);
  })
});
