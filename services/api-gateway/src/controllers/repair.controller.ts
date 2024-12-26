import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateDeviceDto } from './dto/create-device.dto';
import { CreateRepairDto } from './dto/create-repair.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { UpdateRepairDto } from './dto/update-repair.dto';
import { DeviceActions, RepairActions } from './enums/messages-patterns.enum';
import { AuthGuard } from './guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('repair')
export class RepairController {
    constructor(
        @Inject('NATS_SERVICE') private readonly natsClient: ClientProxy,
    ) { }

    // Device
    @Post('device')
    createDevice(@Body() data: CreateDeviceDto) {
        this.natsClient.send(DeviceActions.CreateDevice, data);
    }

    @Get('device')
    findAllDevice() {
        this.natsClient.send(DeviceActions.FindAllDevice, {});
    }

    @Get('device/:id')
    findOneDevice(@Param() id: string) {
        this.natsClient.send(DeviceActions.FindOneDevice, id);
    }

    @Patch('device/:id')
    updateDevice(@Body() data: UpdateDeviceDto) {
        this.natsClient.send(DeviceActions.UpdateDevice, data);
    }

    @Delete('device/:id')
    deleteDevice(@Param() id: string) {
        this.natsClient.send(DeviceActions.DeleteDevice, id);
    }

    // Device
    @Post('repair-order')
    createRepair(@Body() data: CreateRepairDto) {
        this.natsClient.send(RepairActions.CreateRepair, data);
    }

    @Post('repair-order/start/:id')
    startRepair(@Param() id: string) {
        this.natsClient.send(RepairActions.StartRepair, id);
    }

    @Post('repair-order/end/:id')
    endRepair(@Param() id: string) {
        this.natsClient.send(RepairActions.EndRepair, id);
    }

    @Post('repair-order/cancel/:id')
    cancelRepair(@Param() id: string) {
        this.natsClient.send(RepairActions.CancelRepair, id);
    }

    @Get('repair-order')
    findAllRepair() {
        this.natsClient.send(RepairActions.FindAllRepair, {});
    }

    @Get('repair-order/:id')
    findOneRepair(@Param() id: string) {
        this.natsClient.send(RepairActions.FindOneRepair, id);
    }

    @Patch('repair-order/:id')
    updateRepair(@Body() data: UpdateRepairDto) {
        this.natsClient.send(RepairActions.UpdateRepair, data);
    }
}
