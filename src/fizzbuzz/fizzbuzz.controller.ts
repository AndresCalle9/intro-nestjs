import { Controller, Get, Param } from '@nestjs/common';
import { FizzbuzzService } from './fizzbuzz.service';

@Controller('fizzbuzz')
export class FizzbuzzController {
    constructor (private fizzbuzzService: FizzbuzzService) {}
    @Get(':number')
    getFizzbuzz(@Param('number') number): string{
        return this.fizzbuzzService.fizzbuzz(parseInt(number));
    }
}
