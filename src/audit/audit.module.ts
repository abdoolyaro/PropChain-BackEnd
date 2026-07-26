/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { Module } from '@nestjs/common';
import { AuditPruningService } from './audit-pruning.service';
import { PrismaModule } from '../database/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AuditPruningService],
})
export class AuditModule {}
