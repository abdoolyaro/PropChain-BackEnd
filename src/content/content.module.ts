/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { PrismaService } from 'src/database/prisma.service';
@Module({
  providers: [ContentService, PrismaService],
  controllers: [ContentController],
})
export class ContentModule {}
