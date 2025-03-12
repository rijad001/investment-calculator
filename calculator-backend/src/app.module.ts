import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Investment } from './investment.entity';
import { InvestmentsController } from './investments/investments.controller';
import { InvestmentsService } from './investments/investments.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', 
      port: 5433, 
      username: 'postgres',
      password: 'malatajna',
      database: 'calculator_db', 
      entities: [Investment],
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([Investment]),
  ],
  controllers: [AppController, InvestmentsController],
  providers: [AppService, InvestmentsService],
})
export class AppModule {}
