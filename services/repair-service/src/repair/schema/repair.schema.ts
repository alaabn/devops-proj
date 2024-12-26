import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Status } from "../enum/status.enum";

export type RepairOrderDocument = HydratedDocument<RepairOrder>;

@Schema({ timestamps: true })
export class RepairOrder {
    @Prop({ required: true })
    description: string;

    @Prop({ default: Status.PENDING, enum: Status })
    status: string;

    @Prop({ required: true })
    customer: string;

    @Prop({ required: true })
    technician: string;

    @Prop()
    device: string;

    @Prop()
    billing: string;

    @Prop()
    repairOrderParts: string[];
}

export const RepairOrderSchema = SchemaFactory.createForClass(RepairOrder);