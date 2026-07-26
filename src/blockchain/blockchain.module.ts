/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BlockchainService } from './blockchain.service';
import { BlockchainController } from './blockchain.controller';
import { PrismaModule } from '../database/prisma.module';

@Module({
  imports: [ConfigModule, PrismaModule],
  providers: [BlockchainService],
  controllers: [BlockchainController],
  exports: [BlockchainService],
})
export class BlockchainModule {}
