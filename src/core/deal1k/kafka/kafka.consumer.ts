import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { Kafka } from "kafkajs";
import { OrderService } from "../order/order.service";

@Injectable()
export class KafkaConsumer implements OnModuleInit {

    constructor(
        private readonly orderService: OrderService
    ) {

    }

    async onModuleInit() {

        const kafka = new Kafka({
            brokers: ['localhost:9092']
        })

        const consumeer = kafka.consumer({ groupId: 'deal1k' });

        await consumeer.connect();
        console.log('Kafka consumer connected');

        await consumeer.subscribe({ topic: 'order-created', fromBeginning: true });

        await consumeer.run({
            eachMessage: async ({ topic, partition, message }) => {

                console.log(`Received message: ${message?.value?.toString()}`);

                const order = JSON.parse(message?.value?.toString());

                // process the order
                await this.orderService.createOrder({
                    productId: order.productId,
                    userId: order.userId,
                    quantity: order.quantity
                });

            }
        })

    }

}