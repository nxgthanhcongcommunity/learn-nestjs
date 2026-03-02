import { Injectable, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqplib';
import { OrderService } from '../order/order.service';

@Injectable()
export class RabbitMQConsumer implements OnModuleInit {
    constructor(private readonly orderService: OrderService) { }

    async onModuleInit() {
        const connection = await amqp.connect('amqp://guest:guest@localhost:5672');
        const channel = await connection.createChannel();

        await channel.assertQueue('order_queue', {
            durable: true,
        });

        channel.prefetch(10); // xử lý song song 10 message

        channel.consume('order_queue', async (msg) => {
            if (!msg) return;

            try {

                console.log(`Received message: ${msg.content.toString()}`);

                const data = JSON.parse(msg.content.toString());

                await this.orderService.createOrder(data);

                channel.ack(msg);
            } catch (error) {
                console.error('Order failed:', error);
                channel.nack(msg, false, true); // retry
            }
        });
    }
}