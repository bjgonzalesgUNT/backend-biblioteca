import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './swagger';
import { LoggerService } from './core/logger/logger.service';
import * as bodyParser from 'body-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import * as colors from 'colors';

async function bootstrap() {
  const env = process.env.NODE_ENV;
  const port = process.env.PORT;

  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  });

  const configService = app.get(ConfigService);
  const HOST = configService.get('HOST', 'localhost');
  const PORT = configService.get('PORT');

  // BodyParser
  app.use(
    bodyParser.urlencoded({
      limit: '30mb',
      extended: true,
      parameterLimit: 50000,
    }),
  );

  // RateLimit
  app.use(
    rateLimit({
      windowMs: 1000 * 60 * 60,
      limit: 1000,
      message:
        '⚠️  Too many request created from this IP, please try again after an hour',
    }),
  );

  // Global prefix for all routes
  app.setGlobalPrefix('api/v1');

  // Handle all user input validation globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Enables the API docs auto-generation.
  if (env != 'production') {
    setupSwagger(app);
  }

  // Use helmet for security
  app.use(helmet());

  // Enable CORS
  app.enableCors();

  // Listen server
  await app.listen(port);

  // Colors
  colors.enable();

  env != 'production'
    ? Logger.log(
        'Boostrapt',
        `🚀 Server ready at http://${HOST}:${PORT.cyan.bold}`,
      )
    : Logger.log(
        'Boostrapt',
        `🚀  Server is listening on port ${PORT.cyan.bold}`,
      );
}
bootstrap();
