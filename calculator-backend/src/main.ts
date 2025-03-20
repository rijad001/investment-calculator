import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200', // Allow requests from frontend
    methods: 'GET,POST,PUT,DELETE', // Allow these HTTP methods
    credentials: true, // Allow cookies if needed
  });

  // Dodaj globalni ValidationPipe
  /*  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Uklanja nepoznata polja iz DTO-ova
      forbidNonWhitelisted: true, // Baca grešku ako se pojavi nepoznato polje
      transform: true, // Automatski transformira ulazne podatke u odgovarajuće tipove
    }),
  ); */

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
