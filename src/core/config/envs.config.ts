import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  // *NODE
  NODE_ENV: 'development' | 'test' | 'production';

  // *APP
  APP_HOST: string;
  APP_PORT: number;
  APP_API_VERSION: string;
  APP_URL: string;

  // *PAGINATION
  DEFAULT_PAGE: number;
  DEFAULT_LIMIT: number;

  // *DATABASE
  DB_HOST: string;
  DB_PORT: number;
  DB_USER: string;
  DB_PASS: string;
  DB_DIALECT: string;
  DB_NAME_TEST: string;
  DB_NAME_DEVELOPMENT: string;
  DB_NAME_PRODUCTION: string;

  // *JWT
  JWT_KEY: string;
  JWT_EXPIRATION: string;
}

const envsSchema = joi
  .object({
    // *NODE
    NODE_ENV: joi
      .string()
      .valid('development', 'test', 'production')
      .required(),

    // *APP
    APP_HOST: joi.string().required(),
    APP_PORT: joi.number().port().required(),
    APP_API_VERSION: joi.string().required(),

    // *PAGINATION
    DEFAULT_PAGE: joi.number().required(),
    DEFAULT_LIMIT: joi.number().required(),

    // *DATABASE
    DB_HOST: joi.string().required(),
    DB_PORT: joi.number().port().required(),
    DB_USER: joi.string().required(),
    DB_PASS: joi.string().required(),
    DB_DIALECT: joi.string().required(),
    DB_NAME_TEST: joi.string().required(),
    DB_NAME_DEVELOPMENT: joi.string().required(),
    DB_NAME_PRODUCTION: joi.string().required(),

    // *JWT
    JWT_KEY: joi.string().required(),
    JWT_EXPIRATION: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  // *NODE
  nodeEnv: envVars.NODE_ENV,

  // *APP
  appHost: envVars.APP_HOST,
  appPort: envVars.APP_PORT,
  appApiVersion: envVars.APP_API_VERSION,
  appUrl: `http://${envVars.APP_HOST}:${envVars.APP_PORT}/api/${envVars.APP_API_VERSION}`,

  // *PAGINATION
  defaultPage: envVars.DEFAULT_PAGE,
  defaultLimit: envVars.DEFAULT_LIMIT,

  // *DATABASE
  dbHost: envVars.DB_HOST,
  dbPort: envVars.DB_PORT,
  dbUser: envVars.DB_USER,
  dbPass: envVars.DB_PASS,
  dbDialect: envVars.DB_DIALECT,
  dbNameTest: envVars.DB_NAME_TEST,
  dbNameDevelopment: envVars.DB_NAME_DEVELOPMENT,
  dbNameProduction: envVars.DB_NAME_PRODUCTION,

  // *JWT
  jwtKey: envVars.JWT_KEY,
  jwtExpiration: envVars.JWT_EXPIRATION,
};
