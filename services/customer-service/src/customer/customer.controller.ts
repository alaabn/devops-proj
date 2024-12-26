import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerActions } from './enums/message-patterns.enum';

@Controller()
export class CustomerController {
  constructor(private readonly customerService: CustomerService) { }

  @MessagePattern(CustomerActions.CreateCustomer)
  async create(@Payload() data: CreateCustomerDto) {
    return await this.customerService.createCustomer(data);
  }

  @MessagePattern(CustomerActions.FindAllCustomer)
  async findAll() {
    return await this.customerService.getAllCustomers();
  }

  @MessagePattern(CustomerActions.FindOneCustomer)
  async findOne(@Payload() id: string) {
    return await this.customerService.getCustomerById(id);
  }

  @MessagePattern(CustomerActions.UpdateCustomer)
  async update(@Payload() data: UpdateCustomerDto) {
    return await this.customerService.editCustomer(data.id, data);
  }

  @MessagePattern(CustomerActions.DeleteCustomer)
  async delete(@Payload() id: string) {
    return await this.customerService.deleteCustomer(id);
  }
}
