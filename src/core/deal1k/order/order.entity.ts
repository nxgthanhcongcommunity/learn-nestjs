import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    productId: string;

    @Column()
    userId: string;

    @Column()
    quantity: number;

    @Column()
    status: string;
}