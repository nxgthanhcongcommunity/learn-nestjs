import { Module } from "@nestjs/common";
import { RedisModule } from "../redis/redis.module";
import { DealService } from "./deal.service";
import { DealController } from "./deal.controller";
import { OrderModule } from "../order/order.module";
import { KafkaModule } from "../kafka/kafka.module";
import { RabbitMQModule } from "../rabitmq/rabitmq.module";

@Module({
    providers: [DealService],
    controllers: [DealController],
    imports: [RedisModule, OrderModule, RabbitMQModule],
})

export class DealModule { }