import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBillDTO } from './dto/create-bill.dto';
import { Status } from './enums/status.enum';
import { Bill, BillDocument } from './schemas/billing.schema';

@Injectable()
export class BillService {
  constructor(@InjectModel(Bill.name) private readonly billModel: Model<BillDocument>) { }

  async getAllBills() {
    return await this.billModel.find().exec();
  }

  async getBillById(id: string) {
    return await this.billModel.findById(id).exec();
  }

  async createBill(data: CreateBillDTO) {
    return await this.billModel.create(data);
  }

  async editBillStatus(id: string, paymentStatus: Status) {
    return await this.billModel.findByIdAndUpdate(id, { paymentStatus }).exec();
  }
}
