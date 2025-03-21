import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { InvestmentsService } from './investments.service';
import { Investment } from '../investment.entity';
import { table } from 'console';

@Controller('investments')
export class InvestmentsController {
  constructor(private readonly investmentsService: InvestmentsService) {}

  @Post()
  async create(@Body() investment: Investment): Promise<Investment> {
    console.log('Received data:', investment);
    return this.investmentsService.create(investment);
  }

  @Get()
  async getInvestment(): Promise<Investment[]> {
    return await this.investmentsService.getAllInvestments();
  }

  @Delete(':tableID')
  async deleteRow(@Param('tableID') id: string) {
    return this.investmentsService.deleteRow(id);
  }

}
