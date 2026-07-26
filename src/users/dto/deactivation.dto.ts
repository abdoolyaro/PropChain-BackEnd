/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class DeactivateAccountDto {
  @IsOptional()
  @IsString()
  reason?: string;

  @IsOptional()
  @IsBoolean()
  scheduleDeletion?: boolean;

  @IsOptional()
  @IsString()
  deletionNote?: string;
}

export class ReactivateAccountDto {
  @IsOptional()
  @IsString()
  reason?: string;

  @IsString()
  token: string;
}
