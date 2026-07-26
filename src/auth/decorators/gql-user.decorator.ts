/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const GqlUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context);
  return ctx.getContext().req.authUser;
});
