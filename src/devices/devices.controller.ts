import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  async create(@Body() createDeviceDto: CreateDeviceDto) {
    console.log(createDeviceDto);
    try {
      const newDevice = await this.devicesService.create(createDeviceDto);
      return {
        message: 'Device has been created successfully',
        newDevice,
      };
    } catch (err) {
      return {
        statusCode: 400,
        message: 'Error: Student not created!' + err,
        error: 'Bad Request',
      };
    }
  }

  @Get()
  async findAll() {
    try {
      const devices = await this.devicesService.findAll();
      return {
        message: 'Devices found successfuly',
        devices,
      };
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          message: error.message || 'No devices found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Get('/:id')
  async getDevice(@Param('id') id: string) {
    try {
      const existingDevice = await this.devicesService.findOne(id);
      return {
        message: 'Device found successfully',
        existingDevice,
      };
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          message: error.message || `Device with ID ${id} not found`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Delete('/:id')
  async deleteDevice(@Param('id') id: string) {
    try {
      const deviceToDelete = await this.devicesService.remove(id);
      return {
        message: 'Device deleted successfully',
        deviceToDelete,
      };
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          message: error.message || `Device with ID ${id} not found`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
