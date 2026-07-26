/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { Module } from '@nestjs/common';
import { MortgageCalculatorController } from './mortgage-calculator.controller';
import { MortgageCalculatorService } from './mortgage-calculator.service';

@Module({
  controllers: [MortgageCalculatorController],
  providers: [MortgageCalculatorService],
})
export class MortgageCalculatorModule {}
