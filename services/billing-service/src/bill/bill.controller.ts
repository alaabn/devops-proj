import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BillService } from './bill.service';
import { CreateBillDTO } from './dto/create-bill.dto';
import { BillActions } from './enums/messages-patterns.enum';
import { Status } from './enums/status.enum';

@Controller()
export class BillController {
  constructor(private readonly billService: BillService) { }

  @MessagePattern(BillActions.FindBills)
  async allBills() {
    return await this.billService.getAllBills();
  }

  @MessagePattern(BillActions.FindOneBill)
  async billById(@Payload() id: string) {
    return await this.billService.getBillById(id);
  }

  @MessagePattern(BillActions.CreateBill)
  async createBill(@Payload() data: CreateBillDTO) {
    return await this.billService.createBill(data);
  }

  @MessagePattern(BillActions.BillPaid)
  async paidBill(@Payload() id: string) {
    return await this.billService.editBillStatus(id, Status.PAID);
  }

  @MessagePattern(BillActions.BillCanceled)
  async cancelBill(@Payload() id: string) {
    return await this.billService.editBillStatus(id, Status.CANCELLED);
  }
}
