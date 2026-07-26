/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../database/prisma.module';
import { EmailModule } from '../email/email.module';
import { FraudService } from './fraud.service';

@Module({
  imports: [ConfigModule, PrismaModule, EmailModule],
  providers: [FraudService],
  exports: [FraudService],
})
export class FraudModule {}
