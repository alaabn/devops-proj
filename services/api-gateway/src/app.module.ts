import { Module } from '@nestjs/common';
import { ContollersModule } from './controllers/controller.module';

@Module({
  imports: [ContollersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
