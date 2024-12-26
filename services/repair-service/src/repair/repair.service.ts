import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRepairDto } from './dto/create-repair.dto';
import { UpdateRepairDto } from './dto/update-repair.dto';
import { Status } from './enum/status.enum';
import { RepairOrder, RepairOrderDocument } from './schema/repair.schema';

@Injectable()
export class RepairService {
  constructor(@InjectModel(RepairOrder.name) private readonly repairOrderModel: Model<RepairOrderDocument>) { }

  async createRepairOrder(data: CreateRepairDto) {
    return await this.repairOrderModel.create(data);
  }

  async findAllRepairOrders() {
    return await this.repairOrderModel.find().exec();
  }

  async findRepairOrder(id: string) {
    return await this.repairOrderModel.findById(id).exec();
  }

  async updateRepairOrder(id: string, data: UpdateRepairDto) {
    return await this.repairOrderModel.findByIdAndUpdate(id, data).exec();
  }

  async startRepairOrder(id: string) {
    return await this.repairOrderModel.findByIdAndUpdate(id, { status: Status.IN_PROGRESS }).exec();
  }

  async endRepairOrder(id: string) {
    return await this.repairOrderModel.findByIdAndUpdate(id, { status: Status.COMPLETED }).exec();
  }

  async cancelRepairOrder(id: string) {
    return await this.repairOrderModel.findByIdAndUpdate(id, { status: Status.CANCELLED }).exec();
  }
}
