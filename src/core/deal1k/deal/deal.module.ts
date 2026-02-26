import { Module } from "@nestjs/common";
import { RedisModule } from "../redis/redis.module";
import { DealService } from "./deal.service";
import { DealController } from "./deal.controller";

@Module({
    providers: [DealService],
    controllers: [DealController],
    imports: [RedisModule]
})

export class DealModule { }