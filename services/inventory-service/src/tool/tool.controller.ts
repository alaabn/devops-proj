import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { ToolActions } from './enums/message-patterns.enum';
import { ToolService } from './tool.service';

@Controller()
export class ToolController {
  constructor(private readonly toolService: ToolService) { }

  @MessagePattern(ToolActions.CreateTool)
  async create(@Payload() data: CreateToolDto) {
    return await this.toolService.createTool(data);
  }

  @MessagePattern(ToolActions.FindAllTool)
  async findAll() {
    return await this.toolService.findAllTools();
  }

  @MessagePattern(ToolActions.FindOneTool)
  async findOne(@Payload() id: string) {
    return await this.toolService.findOneTool(id);
  }

  @MessagePattern(ToolActions.UpdateTool)
  async update(@Payload() data: UpdateToolDto) {
    return await this.toolService.updateTool(data.id, data);
  }

  @MessagePattern(ToolActions.DeleteTool)
  async delete(@Payload() id: string) {
    return await this.toolService.deleteTool(id);
  }
}
