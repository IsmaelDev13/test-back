import { Injectable } from '@nestjs/common';
import { Device } from './interfaces/device.interface';

@Injectable()
export class DevicesService {
  private readonly devices: Device[] = [];

  create(device: Device) {
    this.devices.push(device);
  }

  findAll(): Device[] {
    return this.devices;
  }
}
