import { Injectable, OnModuleInit } from "@nestjs/common";
import Redis from "ioredis";
import * as fs from "fs";

@Injectable()
export class RedisService implements OnModuleInit {

    private redis: Redis;
    private decreaseScript: string;

    // create connection to redis server
    onModuleInit() {

        this.redis = new Redis({
            host: process.env.REDIS_HOST,
            port: parseInt(process.env.REDIS_PORT ?? "6379"),
        })

        this.decreaseScript = fs.readFileSync(
            "src/core/deal1k/deal/lua/decrease-stock.lua",
            "utf-8"
        );

    }

    // decrease stock by 1
    async decreseStock(key: string) {
        const result = await this.redis.eval(this.decreaseScript, 1, key);
        return Number(result);
    }

}