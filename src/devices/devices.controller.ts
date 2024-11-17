import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  async create(@Res() response, @Body() createDeviceDto: CreateDeviceDto) {
    try {
      const newDevice = await this.devicesService.create(createDeviceDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Device has been created successfully',
        newDevice,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Student not created!' + err,
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async findAll(@Res() response) {
    try {
      const devices = await this.devicesService.findAll();
      return response.status(HttpStatus.OK).json({
        message: 'Devices found successfuly',
        devices,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get('/:id')
  async getDevice(@Res() response, @Param('id') id: string) {
    try {
      const existingDevice = await this.devicesService.findOne(id);
      return response.status(HttpStatus.OK).json({
        message: 'Device found successfully',
        existingDevice,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Delete('/:id')
  async deleteDevice(@Res() response, @Param('id') id: string) {
    try {
      const deviceToDelete = await this.devicesService.remove(id);
      return response.status(HttpStatus.OK).json({
        message: 'Device deleted successfully',
        deviceToDelete,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }
}
