import { Injectable } from "@nestjs/common";
import { RedisService } from "../redis/redis.service";

@Injectable()
export class DealService {

    constructor(
        private readonly redisService: RedisService
    ) {

    }

    async processDeal(productId: string, userId: string) {
        const key = `stock:${productId}`;

        const stock = await this.redisService.decreseStock(key);

        console.log(`Product ${productId} stock decreased, current stock: ${stock}`);

        if (stock <= 0) {
            // out of stock
            return {
                success: false,
                message: "Out of stock"
            }
        }

        // process the deal
        return {
            success: true,
            message: "Deal processed successfully"
        }

    }

}