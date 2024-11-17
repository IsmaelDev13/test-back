import { Module } from '@nestjs/common';

import { DevicesController } from './devices/devices.controller';
import { DevicesService } from './devices/devices.service';

@Module({
  controllers: [DevicesController],
  providers: [DevicesService],
})
export class AppModule {}
