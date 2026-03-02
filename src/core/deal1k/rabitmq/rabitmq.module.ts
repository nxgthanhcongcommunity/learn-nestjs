import { Module } from '@nestjs/common';
import { OrderModule } from '../order/order.module';
import { RabbitMQPublisher } from './rabitmq.producer';
import { RabbitMQConsumer } from './rabitmq.consumer';

@Module({
    imports: [OrderModule],
    providers: [RabbitMQPublisher, RabbitMQConsumer],
    exports: [RabbitMQPublisher],
})
export class RabbitMQModule { }