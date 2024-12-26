import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { DeviceActions } from './enums/message-patterns.enum';

@Controller()
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) { }

  @MessagePattern(DeviceActions.CreateDevice)
  async create(@Payload() data: CreateDeviceDto) {
    return await this.deviceService.createDevice(data);
  }

  @MessagePattern(DeviceActions.FindAllDevice)
  async findAll() {
    return await this.deviceService.findAllDevices();
  }

  @MessagePattern(DeviceActions.FindOneDevice)
  async findOne(@Payload() id: string) {
    return await this.deviceService.findDevice(id);
  }

  @MessagePattern(DeviceActions.UpdateDevice)
  async update(@Payload() data: UpdateDeviceDto) {
    return await this.deviceService.updateDevice(data.id, data);
  }

  @MessagePattern(DeviceActions.DeleteDevice)
  async remove(@Payload() id: string) {
    return await this.deviceService.deleteDevice(id);
  }
}
