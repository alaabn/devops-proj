import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ToolDocument = HydratedDocument<Tool>;

@Schema({ timestamps: true })
export class Tool {
    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ required: true })
    type: string;

    @Prop()
    quantity: number;
}

export const ToolSchema = SchemaFactory.createForClass(Tool);