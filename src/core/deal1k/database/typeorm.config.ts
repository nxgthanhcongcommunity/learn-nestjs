import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 9999,
            username: 'postgres',
            password: '123456',
            database: 'deal1k',
            autoLoadEntities: true,
            synchronize: true, // dev only
        }),
    ],
})
export class DatabaseModule { }