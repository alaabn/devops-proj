import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { PartActions } from './enums/message-patterns.enum';
import { PartService } from './part.service';

@Controller()
export class PartController {
  constructor(private readonly partService: PartService) { }

  @MessagePattern(PartActions.CreatePart)
  async create(@Payload() data: CreatePartDto) {
    return await this.partService.createPart(data);
  }

  @MessagePattern(PartActions.FindAllPart)
  async findAll() {
    return await this.partService.findAllParts();
  }

  @MessagePattern(PartActions.FindOnePart)
  async findOne(@Payload() id: string) {
    return await this.partService.findOnePart(id);
  }

  @MessagePattern(PartActions.UpdatePart)
  async update(@Payload() data: UpdatePartDto) {
    return await this.partService.updatePart(data.id, data);
  }

  @MessagePattern({ cmd: PartActions.DeletePart })
  async delete(@Payload() id: string) {
    return await this.partService.deletePart(id);
  }
}
