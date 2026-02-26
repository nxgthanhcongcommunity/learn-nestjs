import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DealModule } from './core/deal1k/deal/deal.module';

@Module({
  imports: [DealModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
