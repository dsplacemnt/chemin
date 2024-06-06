import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({}));

  const config = new DocumentBuilder()
    .setTitle('Chemin')
    .setDescription('API REST pour la gestion des mouvements financiers :D')
    .setVersion('1.0')
    .addSecurity('JWT', {
      type: 'http',
      scheme: 'bearer',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, { swaggerOptions: { docExpansion: 'none' } });

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();
