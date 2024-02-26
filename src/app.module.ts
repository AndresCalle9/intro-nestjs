import { Module } from '@nestjs/common';
import { DemoController } from './demo/demo.controller';

@Module({
  imports: [],
  controllers: [DemoController],
})
export class AppModule {}
