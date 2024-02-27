import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzService', () => {
  let service: FizzbuzzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FizzbuzzService],
    }).compile();

    service = module.get<FizzbuzzService>(FizzbuzzService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return Fizz when the number is multple of 3', () =>{
    expect(service.fizzbuzz(3)).toBe('Fizz');
  })
  it('should return Buzz when the number is multple of 5', () =>{
    expect(service.fizzbuzz(5)).toBe('Buzz');
  })
  it('should return FizzBuzz when the number is multple of 15', () =>{
    expect(service.fizzbuzz(15)).toBe('FizzBuzz');
  })
  it('should return a string when the number is not multiple of 3,5 or 15', () =>{
    expect(service.fizzbuzz(7)).toBe('7');
  })
  it('should return a string when the number is not between 0 and 100', () =>{
    expect(service.fizzbuzz(101)).toBe('101');
    expect(service.fizzbuzz(-1)).toBe('-1');
  })

});
