/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { IsDateString, IsNotEmpty, IsString, Matches } from 'class-validator';

export class BlockchainAuditRecordDto {
  @IsString()
  @IsNotEmpty()
  transactionId: string;

  @IsString()
  @Matches(/^[A-Fa-f0-9]{64}$/)
  transactionHash: string;

  @IsDateString()
  timestamp: string;
}
