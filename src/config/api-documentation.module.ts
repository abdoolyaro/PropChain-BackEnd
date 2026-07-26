/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

/**
 * API Documentation Module
 * Provides Swagger/OpenAPI documentation and related endpoints
 */

import { Module } from '@nestjs/common';
import { ApiDocsController } from './api-docs.controller';

@Module({
  controllers: [ApiDocsController],
})
export class ApiDocumentationModule {}
