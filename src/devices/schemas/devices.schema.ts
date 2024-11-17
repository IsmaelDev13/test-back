import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DeviceDocument = HydratedDocument<Device>;

@Schema()
export class Device {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  description: string;

  @Prop()
  presentOrg: string;

  @Prop()
  role: string;

  @Prop()
  type: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;

  @Prop()
  lastConnection: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
