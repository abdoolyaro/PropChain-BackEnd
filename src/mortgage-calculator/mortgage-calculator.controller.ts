/* eslint-disable @typescript-eslint/no-explicit-any -- TODO #891: eliminate any from this file */

import { Body, Controller, Post } from '@nestjs/common';
import { MortgageCalculatorService } from './mortgage-calculator.service';
import { MortgageCalculatorDto } from './dto/mortgage-calculator.dto';

@Controller('mortgage-calculator')
export class MortgageCalculatorController {
  constructor(private readonly mortgageCalculatorService: MortgageCalculatorService) {}

  @Post()
  calculate(@Body() dto: MortgageCalculatorDto) {
    return this.mortgageCalculatorService.calculate(dto);
  }
}
