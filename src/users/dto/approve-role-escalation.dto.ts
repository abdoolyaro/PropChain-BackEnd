/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class ApproveRoleEscalationDto {
  @IsBoolean()
  approved: boolean;

  @IsOptional()
  @IsString()
  comment?: string;
}
