import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PartDocument = HydratedDocument<Part>;

@Schema({ timestamps: true })
export class Part {
    @Prop({ required: true })
    manufacturer: string;

    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    reference: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    stockQuantity: number;
}

export const PartSchema = SchemaFactory.createForClass(Part);