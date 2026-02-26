import { Controller, Get, Param } from '@nestjs/common';
import { DealService } from './deal.service';

@Controller('deal')
export class DealController {

    constructor(
        private readonly dealService: DealService
    ) {

    }

    @Get(':productId/:userId')
    async processDeal(
        @Param('productId') productId: string,
        @Param('userId') userId: string
    ) {
        return await this.dealService.processDeal(productId, userId);
    }

}
