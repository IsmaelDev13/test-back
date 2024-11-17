import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DeviceDocument = HydratedDocument<Device>;

@Schema()
export class Device {
  @Prop()
  name: string;

  @Prop()
  phoneNumber: number;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  lastConnection: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
