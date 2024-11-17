import { ApiProperty } from '@nestjs/swagger';

export class CreateDeviceDto {
  @ApiProperty({
    example: 'Device 1',
  })
  readonly firstName: string;

  @ApiProperty({
    example: '1',
  })
  readonly lastName: string;

  @ApiProperty({
    example: 'Description',
  })
  readonly description: string;

  @ApiProperty({
    example: 'Vodafone',
  })
  readonly presentOrg: string;

  @ApiProperty({
    example: 'Role',
  })
  readonly role: string;

  @ApiProperty({
    example: 'User',
  })
  readonly type: string;

  @ApiProperty({ example: '666554433' })
  readonly phoneNumber: string;

  @ApiProperty({ example: 36.72016 })
  readonly latitude: number;

  @ApiProperty({ example: -4.42034 })
  readonly longitude: number;

  @ApiProperty({ example: 'yesterday' })
  readonly lastConnection: string;
}
