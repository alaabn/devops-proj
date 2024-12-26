import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Specialization } from "../enum/specialization.enum";

export type PersonnelDocument = HydratedDocument<Personnel>;

@Schema({ timestamps: true })
export class Personnel extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, enum: Specialization })
    specialization: string;

    @Prop()
    repairOrders: string[];
}

export const PersonnelSchema = SchemaFactory.createForClass(Personnel);