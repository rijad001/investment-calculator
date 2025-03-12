import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { InvestmentsService } from './investments.service';
import { Investment } from '../investment.entity';

@Controller('investments')
export class InvestmentsController {
  constructor(private readonly investmentsService: InvestmentsService) {}

  @Post()
  async create(@Body() investment: Investment): Promise<Investment> {
    return this.investmentsService.create(investment);
  }
  
}
