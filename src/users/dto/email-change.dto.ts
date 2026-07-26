/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { IsEmail } from 'class-validator';

export class ChangeEmailDto {
  @IsEmail()
  newEmail: string;
}

export class VerifyEmailDto {
  token: string;
}
