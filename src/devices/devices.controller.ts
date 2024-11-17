import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@Controller('devices')
@ApiTags('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.devicesService.create(createDeviceDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.devicesService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devicesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devicesService.remove(id);
  }
}
