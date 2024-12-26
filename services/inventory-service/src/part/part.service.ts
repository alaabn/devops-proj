import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { Part, PartDocument } from './schema/part.schema';

@Injectable()
export class PartService {
  constructor(@InjectModel(Part.name) private readonly partModel: Model<PartDocument>) { }

  async createPart(data: CreatePartDto) {
    return await this.partModel.create(data);
  }

  async findAllParts() {
    return await this.partModel.find().exec();
  }

  async findOnePart(id: string) {
    return await this.partModel.findById(id).exec();
  }

  async updatePart(id: string, data: UpdatePartDto) {
    return await this.partModel.findByIdAndUpdate(id, data).exec();
  }

  async deletePart(id: string) {
    return await this.partModel.findByIdAndDelete(id).exec();
  }
}
