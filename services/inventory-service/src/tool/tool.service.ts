import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { Tool, ToolDocument } from './schema/tool.schema';

@Injectable()
export class ToolService {
  constructor(@InjectModel(Tool.name) private readonly toolModel: Model<ToolDocument>) { }

  async createTool(data: CreateToolDto) {
    return await this.toolModel.create(data);
  }

  async findAllTools() {
    return await this.toolModel.find().exec();
  }

  async findOneTool(id: string) {
    return await this.toolModel.findById(id).exec();
  }

  async updateTool(id: string, data: UpdateToolDto) {
    return await this.toolModel.findByIdAndUpdate(id, data).exec();
  }

  async deleteTool(id: string) {
    return await this.toolModel.findByIdAndDelete(id).exec();
  }
}
