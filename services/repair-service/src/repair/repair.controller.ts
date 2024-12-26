import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateRepairDto } from './dto/create-repair.dto';
import { UpdateRepairDto } from './dto/update-repair.dto';
import { RepairActions } from './enum/message-patterns.enum';
import { RepairService } from './repair.service';

@Controller()
export class RepairController {
  constructor(private readonly repairService: RepairService) { }

  @MessagePattern(RepairActions.CreateRepair)
  async create(@Payload() data: CreateRepairDto) {
    return await this.repairService.createRepairOrder(data);
  }

  @MessagePattern(RepairActions.FindAllRepair)
  async findAll() {
    return await this.repairService.findAllRepairOrders();
  }

  @MessagePattern(RepairActions.FindOneRepair)
  async findOne(@Payload() id: string) {
    return await this.repairService.findRepairOrder(id);
  }

  @MessagePattern(RepairActions.UpdateRepair)
  async update(@Payload() data: UpdateRepairDto) {
    return await this.repairService.updateRepairOrder(data.id, data);
  }

  @MessagePattern(RepairActions.StartRepair)
  async start(@Payload() id: string) {
    return await this.repairService.startRepairOrder(id);
  }

  @MessagePattern(RepairActions.EndRepair)
  async end(@Payload() id: string) {
    return await this.repairService.endRepairOrder(id);
  }

  @MessagePattern(RepairActions.CancelRepair)
  async cancel(@Payload() id: string) {
    return await this.repairService.cancelRepairOrder(id);
  }
}
