import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePersonnelDto } from './dto/create-personnel.dto';
import { UpdatePersonnelDto } from './dto/update-personnel.dto';
import { Personnel, PersonnelDocument } from './schema/personnel.schema';

@Injectable()
export class PersonnelService {
  constructor(@InjectModel(Personnel.name) private readonly personnelModel: Model<PersonnelDocument>) { }

  async createPersonnel(data: CreatePersonnelDto) {
    return await this.personnelModel.create(data);
  }

  async findAllPersonnel() {
    return await this.personnelModel.find().exec();
  }

  async findPersonnelByEmail(email: string) {
    return await this.personnelModel.find({ email }).exec();
  }

  async findOnePersonnel(id: string) {
    return await this.personnelModel.findById(id).exec();
  }

  async updatePersonnel(id: string, data: UpdatePersonnelDto) {
    return await this.personnelModel.findByIdAndUpdate(id, data).exec();
  }

  async deletePersonnel(id: string) {
    return await this.personnelModel.findByIdAndDelete(id).exec();
  }
}
