import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DealModule } from './core/deal1k/deal/deal.module';
import { DatabaseModule } from './core/deal1k/database/typeorm.config';
import { KafkaModule } from './core/deal1k/kafka/kafka.module';
import { RabbitMQModule } from './core/deal1k/rabitmq/rabitmq.module';

@Module({
  imports: [DatabaseModule, DealModule, RabbitMQModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
