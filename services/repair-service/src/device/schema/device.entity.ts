import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DeviceDocument = HydratedDocument<Device>;

export class Device {
    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    brand: string;

    @Prop({ required: true })
    model: string;

    @Prop()
    serialNumber: string;

    @Prop()
    repairOrders: string[];
}


export const DeviceSchema = SchemaFactory.createForClass(Device);
