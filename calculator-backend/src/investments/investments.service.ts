import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Investment } from '../investment.entity';

@Injectable()
export class InvestmentsService {
  constructor(
    @InjectRepository(Investment)
    private investmentRepository: Repository<Investment>,
  ) {}

  //Input data
  async create(investment: Investment): Promise<Investment> {
    return this.investmentRepository.save(investment);
  }

  async getAllInvestments(): Promise<Investment[]> {
    return await this.investmentRepository.find();
  }

  async deleteRow(id: number) {
    return await this.investmentRepository.delete({ tableID: id });
  }

  async updateRow(tableID: number, updateData: Partial<Investment>): Promise <Investment>{
    const investment = await this.investmentRepository.findOne({ where: { tableID } });

    if(!investment) throw new NotFoundException("Investment not found");

    Object.assign(investment,updateData);
    return this.investmentRepository.save(investment);
  }
  
  async getInvestmentById(id: number): Promise<Investment> {
    const investment = await this.investmentRepository.findOne({
      where: {
          tableID: id,
      },
  });
    if (!investment) {
      throw new NotFoundException(`Investment with ID ${id} not found`);
    }
    return investment;
  }
}
