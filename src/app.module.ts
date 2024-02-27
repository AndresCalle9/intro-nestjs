import { Module } from '@nestjs/common';
import { DemoController } from './demo/demo.controller';
import { FizzbuzzModule } from './fizzbuzz/fizzbuzz.module';

@Module({
  imports: [FizzbuzzModule],
  controllers: [DemoController],
})
export class AppModule {}
