import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { InvestmentsService } from './investments.service';
import { Investment } from '../investment.entity';
import { table } from 'console';

@Controller('investments')
export class InvestmentsController {
  constructor(private readonly investmentsService: InvestmentsService) {}

  @Post()
  async create(@Body() investment: Investment): Promise<Investment> {
    return this.investmentsService.create(investment);
  }

  @Get()
  async getInvestment(): Promise<Investment[]> {
    return await this.investmentsService.getAllInvestments();
  }

  @Get(':id')
  async getInvestmentById(@Param('tabelID') id : number) : Promise<Investment> {
    return this.investmentsService.getInvestmentById(id);
  }
 


  @Delete(':tableID')
  async deleteRow(@Param('tableID') id: string) {
    return this.investmentsService.deleteRow(+id);
  }

  @Put(':tableID')
  async updateRow(@Param('tableID') tableID: number, @Body() updateData: Partial<Investment>): Promise<Investment>{
    return this.investmentsService.updateRow(tableID,updateData);
  }
}
