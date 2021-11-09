import { Module } from '@nestjs/common';
import { HomeController } from './controller';
import { ViteModule } from '@nestseed/vite-service';

@Module({
  imports: [ViteModule],
  controllers: [HomeController],
})
export class Test1Module {}
