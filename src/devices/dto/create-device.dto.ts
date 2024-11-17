import { IsString, IsNumber, IsNotEmpty, MaxLength } from 'class-validator';
export class CreateDeviceDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly presentOrg: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly role: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly type: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly phoneNumber: string;

  @IsNumber()
  @IsNotEmpty()
  readonly latitude: number;

  @IsNumber()
  @IsNotEmpty()
  readonly longitude: number;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly lastConnection: string;
}
