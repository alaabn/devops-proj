import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RepairController } from './repair.controller';
import { RepairService } from './repair.service';
import { RepairOrder, RepairOrderSchema } from './schema/repair.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RepairOrder.name, schema: RepairOrderSchema }])
  ],
  controllers: [RepairController],
  providers: [RepairService],
})
export class RepairModule { }
