import { Module } from "@nestjs/common";
import { OrderModule } from "../order/order.module";
import { KafkaConsumer } from "./kafka.consumer";
import { KafkaProducer } from "./kafka.producer";

@Module({
    imports: [OrderModule],
    providers: [KafkaProducer, KafkaConsumer],
    exports: [KafkaProducer],
})
export class KafkaModule { }