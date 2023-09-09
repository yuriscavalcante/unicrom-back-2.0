import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Signale } from 'signale';
import * as morgan from 'morgan';
import { json, urlencoded } from 'express';
import { ValidationPipe } from '@nestjs/common';
import { BadRequestInterceptor } from './common/errors/interceptors/BadRequestInterceptor';
import { NotFoundInterceptor } from './common/errors/interceptors/NotFoundInterceptor';

async function bootstrap() {
  const log = new Signale();

  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.use(morgan('dev'));
    app.setGlobalPrefix('/api/v1');
    app.use(json({ limit: '10mb' }));
    app.use(urlencoded({ extended: true, limit: '10mb' }));

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    app.useGlobalInterceptors(new BadRequestInterceptor());
    app.useGlobalInterceptors(new NotFoundInterceptor());

    await app.listen(process.env.PORT || 5000);
    return log
      .scope('Server')
      .success(`Server is running on port ${process.env.PORT}`);
  } catch (err) {
    log.scope('Server').error(`Error starting server: ${err.message}`);
    process.exit(1);
  }
}
bootstrap();
