import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { Device, DeviceDocument } from './schema/device.entity';

@Injectable()
export class DeviceService {
  constructor(@InjectModel(Device.name) private readonly deviceModel: Model<DeviceDocument>) { }

  async createDevice(data: CreateDeviceDto) {
    return await this.deviceModel.create(data);
  }

  async findAllDevices() {
    return await this.deviceModel.find().exec();
  }

  async findDevice(id: string) {
    return await this.deviceModel.findById(id).exec();
  }

  async updateDevice(id: string, data: UpdateDeviceDto) {
    return await this.deviceModel.findByIdAndUpdate(id, data).exec();
  }

  async deleteDevice(id: string) {
    return await this.deviceModel.findByIdAndDelete(id).exec();
  }
}
