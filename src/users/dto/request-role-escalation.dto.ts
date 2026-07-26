/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { IsEnum, IsString, MinLength } from 'class-validator';

export class RequestRoleEscalationDto {
  @IsString()
  @MinLength(10)
  justification: string;

  @IsEnum(['organizer', 'moderator', 'admin'])
  requestedRole: string;
}
