/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { IsString, IsOptional } from 'class-validator';

export class AvatarUploadResponseDto {
  @IsString()
  avatarUrl: string;

  @IsString()
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
}

export class AvatarDeleteDto {
  @IsString()
  filename: string;
}

export class AvatarUpdateDto {
  @IsOptional()
  @IsString()
  avatarUrl?: string;
}
