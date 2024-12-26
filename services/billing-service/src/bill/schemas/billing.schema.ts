import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Status } from "../enums/status.enum";

export type BillDocument = HydratedDocument<Bill>;

@Schema({ timestamps: true })
export class Bill {
    @Prop({ required: true, unique: true })
    repairOrder: string;

    @Prop({ default: 0 })
    totalAmount: Types.Decimal128;

    @Prop({ default: Status.PENDING, required: true, enum: Status })
    paymentStatus: string;

    @Prop()
    paymentDate: Date;
}

export const BillSchema = SchemaFactory.createForClass(Bill);