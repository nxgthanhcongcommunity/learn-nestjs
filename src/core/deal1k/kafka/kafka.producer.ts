import { Injectable, OnModuleInit } from "@nestjs/common";
import { Kafka } from 'kafkajs';

@Injectable()
export class KafkaProducer implements OnModuleInit {
    private producer: any;

    async onModuleInit() {
        const kafka = new Kafka({
            brokers: ['localhost:9092']
        });

        this.producer = kafka.producer();
        await this.producer.connect();

        console.log('Kafka producer connected');
    }

    async sendOrderCreatedMessage(order: any) {
        await this.producer.send({
            groupId: 'deal1k',
            topic: 'order-created',
            messages: [
                { value: JSON.stringify(order) }
            ]
        });

    }
}