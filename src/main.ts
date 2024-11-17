import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // const options = new DocumentBuilder()
  //   .setTitle('MongoDB Devices REST API')
  //   .setDescription('API REST for showing devices con MongoDB')
  //   .setVersion('1.0')
  //   .build();

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', 'https://test-front-sage.vercel.app'],
    methods: ['GET', 'POST', 'DELETE'],
  });
  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
