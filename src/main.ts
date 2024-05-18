import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import * as colors from 'colors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { LoggerService } from './core/logger/logger.service';
import { setupSwagger } from './swagger';
import { HOST_KEY, PORT_KEY } from './core/constants';

async function bootstrap() {
  const env = process.env.NODE_ENV;
  const port = process.env.PORT;

  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  });

  const configService = app.get(ConfigService);
  const HOST = configService.get(HOST_KEY, 'localhost');
  const PORT = configService.get(PORT_KEY);

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
    ? Logger.log('Boostrapt', `🚀 Server ready at ${HOST}:${PORT.cyan.bold}`)
    : Logger.log(
        'Boostrapt',
        `🚀  Server is listening on port ${PORT.cyan.bold}`,
      );
}
bootstrap();
