/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { IsEnum, IsString, IsNotEmpty } from 'class-validator';
import { RsvpStatus } from '@prisma/client';

export class RsvpOpenHouseDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsEnum(RsvpStatus)
  status: RsvpStatus;
}
