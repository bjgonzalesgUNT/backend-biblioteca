<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Installation

```bash
npm install
```

## Enviroments

Rename `.env.copy` file to `.env`

## Running the app

```bash
# development
$ npm run start
```

## Running database

1. Run docker `npm run docker`
2. Run migrations `npm run migrate`
3. Run seeders `npm run seed`

## Running database undo

1. Run undo migration `npm run migrate:undo`
2. Run undo migrations `npm run migrate:undo:all`
3. Run undo seeder `npm run seed:undo`
4. Run undo seeders `npm run seed:undo:all`

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
