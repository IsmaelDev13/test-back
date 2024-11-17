import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import { DeviceDocument } from './schemas/devices.schema';
import { Model } from 'mongoose';
import { CreateDeviceDto } from './dto/create-device.dto';
import { Device } from './interfaces/device.interface';

@Injectable()
export class DevicesService {
  constructor(
    @InjectModel('Device')
    private readonly deviceModel: Model<Device>,
  ) {}

  async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    const newDevice = await new this.deviceModel(createDeviceDto);
    return newDevice.save();
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
    // return this.deviceModel.findByIdAndDelete({ _id: id }).exec();
    const deviceToRemove = await this.deviceModel.findByIdAndDelete(id);
    if (!deviceToRemove) {
      throw new NotFoundException(`Device #${id} not found`);
    }
    return deviceToRemove;
  }
}
