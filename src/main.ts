/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
  .setTitle('Contacts Api')
  .setDescription('Built in NEST.js for contact CRUD operations...')
  .setVersion('1.0')
  .addTag('contacts')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('https://nest-js-crud-with-jwt-auth.vercel.app/api', app, document);
  await app.listen(3000);
}
bootstrap();
