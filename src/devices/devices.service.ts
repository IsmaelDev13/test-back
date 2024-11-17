import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { CreateDeviceDto } from './dto/create-device.dto';
import { Device, DeviceDocument } from './schemas/devices.schema';

@Injectable()
export class DevicesService {
  constructor(
    @InjectModel(Device.name)
    private deviceModel: Model<DeviceDocument>,
  ) {}

  async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    try {
      const newDevice = new this.deviceModel(createDeviceDto);
      return await newDevice.save();
    } catch (error) {
      throw new Error(`Device creation failed: ${error.message}`);
    }
  }

  async findAll(): Promise<Device[]> {
    const devices = await this.deviceModel.find();
    if (!devices || devices.length == 0) {
      throw new NotFoundException('No Devices found');
    }
    return devices;
  }

  async findOne(id: string): Promise<Device> {
    const existingDevice = await this.deviceModel.findById(id).exec();
    if (!existingDevice) {
      throw new NotFoundException();
    }
    return existingDevice;
  }

  async remove(id: string): Promise<Device> {
    const deviceToRemove = await this.deviceModel.findByIdAndDelete(id);
    if (!deviceToRemove) {
      throw new NotFoundException(`Device #${id} not found`);
    }
    return deviceToRemove;
  }
}
