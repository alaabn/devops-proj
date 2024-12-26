import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerActions } from './enums/messages-patterns.enum';
import { AuthGuard } from './guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('customer')
export class CustomerController {
    constructor(
        @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
    ) { }

    @Post()
    createCustomer(@Body() data: CreateCustomerDto) {
        this.natsClient.send(CustomerActions.CreateCustomer, data);
    }

    @Get()
    findAll() {
        this.natsClient.send(CustomerActions.FindAllCustomer, {});
    }

    @Get(':id')
    findOne(@Param() id: string) {
        this.natsClient.send(CustomerActions.FindOneCustomer, id);
    }

    @Patch(':id')
    update(@Body() data: UpdateCustomerDto) {
        this.natsClient.send(CustomerActions.UpdateCustomer, data);
    }

    @Delete(':id')
    delete(@Param() id: string) {
        this.natsClient.send(CustomerActions.DeleteCustomer, id);
    }
}
