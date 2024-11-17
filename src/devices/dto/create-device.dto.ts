import { ApiProperty } from '@nestjs/swagger';

export class CreateDeviceDto {
  @ApiProperty({
    example: 'Device 1',
  })
  readonly name: string;

  @ApiProperty({ example: '666554433' })
  readonly phoneNumber: string;

  @ApiProperty({ example: 36.72016 })
  readonly latitude: number;

  @ApiProperty({ example: -4.42034 })
  readonly longitude: number;

  @ApiProperty({ example: 'yesterday' })
  readonly lastConnection: string;
}
