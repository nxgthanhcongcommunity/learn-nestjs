import { Injectable, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqplib';

@Injectable()
export class RabbitMQPublisher implements OnModuleInit {
    private channel;
    private readonly queueName = 'order_queue';

    async onModuleInit() {
        const connection = await amqp.connect('amqp://guest:guest@localhost:5672');
        this.channel = await connection.createChannel();

        await this.channel.assertQueue(this.queueName, {
            durable: true,
        });
    }

    async publishOrder(data: any) {
        this.channel.sendToQueue(
            this.queueName,
            Buffer.from(JSON.stringify(data)),
            { persistent: true },
        );
    }
}