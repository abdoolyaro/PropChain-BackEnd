/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { IsEnum, IsBoolean, IsOptional } from 'class-validator';
import { DigestFrequency } from '@prisma/client';

export class UpdateDigestPreferenceDto {
  @IsOptional()
  @IsEnum(DigestFrequency)
  frequency?: DigestFrequency;

  @IsOptional()
  @IsBoolean()
  enabled?: boolean;
}
