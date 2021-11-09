import { Module } from '@nestjs/common';
import { HomeController } from './controller';

@Module({
  controllers: [HomeController],
})
export class Test1Module {}
