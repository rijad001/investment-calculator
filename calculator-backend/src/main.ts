import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200', // Allow requests from frontend
    methods: 'GET,POST,PUT,DELETE', // Allow these HTTP methods
    credentials: true // Allow cookies if needed
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
