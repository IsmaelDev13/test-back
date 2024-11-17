import { AppService } from './app.service';
import { Controller, Get, Req, Post, Param } from '@nestjs/common';
import { Request } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('devices')
export class DevicesController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all devices';
  }

  @Post()
  create(): string {
    return 'This actions adds a new device';
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This actions returns a #${params.id} device`;
  }
}
