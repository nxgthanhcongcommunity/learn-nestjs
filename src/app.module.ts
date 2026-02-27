import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DealModule } from './core/deal1k/deal/deal.module';
import { DatabaseModule } from './core/deal1k/database/typeorm.config';

@Module({
  imports: [DatabaseModule, DealModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
