import { IsString, IsNumber, IsNotEmpty, MaxLength } from 'class-validator';
export class CreateDeviceDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  description: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  presentOrg: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  role: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  type: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  phoneNumber: string;

  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  lastConnection: string;
}
