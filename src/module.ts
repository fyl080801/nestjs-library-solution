import { Module } from '@nestjs/common';
import { Test1Module } from '@nestseed/test1';

@Module({
  imports: [Test1Module],
})
export class MainModule {}
