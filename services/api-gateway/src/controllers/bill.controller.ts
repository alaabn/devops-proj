import { Body, Controller, Get, Inject, Param, Post, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateBillDTO } from './dto/create-bill.dto';
import { BillActions } from './enums/messages-patterns.enum';
import { AuthGuard } from './guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('bill')
export class BillController {
    constructor(
        @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
    ) { }

    @Get()
    getAllBills() {
        this.natsClient.send(BillActions.FindBills, {});
    }

    @Get(':id')
    getBillById(@Param() id: string) {
        this.natsClient.send(BillActions.FindBills, id);
    }

    @Post()
    createBill(@Body() data: CreateBillDTO) {
        this.natsClient.send(BillActions.CreateBill, data);
    }

    @Post('pay/:id')
    payBill(@Param() id: string) {
        this.natsClient.send(BillActions.BillPaid, id);
    }

    @Post('cancel/:id')
    cancelBill(@Param() id: string) {
        this.natsClient.send(BillActions.BillCanceled, id);
    }
}
