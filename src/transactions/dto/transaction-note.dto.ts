/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiProperty()
  @IsString()
  content: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean = true;
}
