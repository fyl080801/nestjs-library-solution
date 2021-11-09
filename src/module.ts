import { Module } from '@nestjs/common';
import { Test1Module } from '@nestseed/test1';
import { Test2Module } from '@nestseed/test2';

@Module({
  imports: [Test1Module, Test2Module],
})
export class MainModule {}
