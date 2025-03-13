import { Injectable } from '@nestjs/common';
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

  async getAllInvestments() : Promise<Investment[]> {
    return await this.investmentRepository.find()
  }
  
  async deleteRow (id: number) {
    return await this.investmentRepository.delete({tableID: id});
  }
}
