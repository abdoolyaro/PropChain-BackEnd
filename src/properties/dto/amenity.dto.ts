/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateAmenityDto {
  @IsString()
  name: string;

  @IsString()
  amenityType: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;
}

export class UpdateAmenityDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  amenityType?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isAvailable?: boolean;
}
