import { Module } from "@nestjs/common";
import { RedisModule } from "../redis/redis.module";
import { DealService } from "./deal.service";
import { DealController } from "./deal.controller";
import { OrderModule } from "../order/order.module";

@Module({
    providers: [DealService],
    controllers: [DealController],
    imports: [RedisModule, OrderModule]
})

export class DealModule { }