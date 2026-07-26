/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { Module, Global } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsInterceptor } from './analytics.interceptor';

@Global()
@Module({
  controllers: [AnalyticsController],
  providers: [AnalyticsService, AnalyticsInterceptor],
  exports: [AnalyticsService, AnalyticsInterceptor],
})
export class AnalyticsModule {}
