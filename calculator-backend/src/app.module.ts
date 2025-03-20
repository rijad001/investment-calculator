import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Investment } from './investment.entity';
import { InvestmentsController } from './investments/investments.controller';
import { InvestmentsService } from './investments/investments.service';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', 
      port: 5433, 
      username: 'postgres',
      password: 'malatajna',
      database: 'calculator_db', 
      entities: [Investment, User],
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([Investment]),
    AuthModule,
  ],
  controllers: [AppController, InvestmentsController],
  providers: [AppService, InvestmentsService],
})
export class AppModule {}
