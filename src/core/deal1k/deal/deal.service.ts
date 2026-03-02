import { Injectable } from "@nestjs/common";
import { RedisService } from "../redis/redis.service";
import { OrderService } from "../order/order.service";
import { RabbitMQPublisher } from "../rabitmq/rabitmq.producer";

@Injectable()
export class DealService {

    constructor(
        private readonly redisService: RedisService,
        private readonly orderService: OrderService,
        private readonly rabbitMQPublisher: RabbitMQPublisher
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

        await this.rabbitMQPublisher.publishOrder({
            productId,
            userId,
            quantity: 1
        });

        // process the deal
        return {
            success: true,
            message: "Deal processed successfully"
        }

    }

}