import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer, CustomerDocument } from './schemas/customer.schema';

@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer.name) private readonly customerModel: Model<CustomerDocument>) { }

  async getAllCustomers() {
    return await this.customerModel.find().exec();
  }

  async getCustomerById(id: string) {
    return await this.customerModel.findById(id).exec();
  }

  async createCustomer(data: CreateCustomerDto) {
    return await this.customerModel.create(data);
  }

  async editCustomer(id: string, data: UpdateCustomerDto) {
    return await this.customerModel.findByIdAndUpdate(id, data).exec();
  }

  async deleteCustomer(id: string) {
    return await this.customerModel.findByIdAndDelete(id).exec();
  }
}
