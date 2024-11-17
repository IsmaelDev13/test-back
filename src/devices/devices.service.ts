import { Injectable } from '@nestjs/common';
import { Device } from './schemas/devices.schema';
import { InjectModel } from '@nestjs/mongoose';
import { DeviceDocument } from './schemas/devices.schema';
import { Model } from 'mongoose';
import { CreateDeviceDto } from './dto/create-device.dto';
import { Request } from 'express';

@Injectable()
export class DevicesService {
  constructor(
    @InjectModel(Device.name)
    private readonly deviceModel: Model<DeviceDocument>,
  ) {}

  async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    return this.deviceModel.create(createDeviceDto);
  }

  async findAll(request: Request): Promise<Device[]> {
    return this.deviceModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(id: string): Promise<Device> {
    return this.deviceModel.findOne({ _id: id }).exec();
  }

  async remove(id: string) {
    return this.deviceModel.findByIdAndDelete({ _id: id }).exec();
  }
}
