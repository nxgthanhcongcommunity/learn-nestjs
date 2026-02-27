import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "./order.entity";
import { Repository } from "typeorm";

@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>
    ) {

    }

    async createOrder(data: Partial<Order>): Promise<Order> {
        const order = this.orderRepository.create({
            ...data,
            status: "CREATED"
        });

        return this.orderRepository.save(order);
    }

}
