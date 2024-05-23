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
$ npm run start:dev
```

## Running database

1. Run docker `npm run docker:start`
2. Run migrations `npm run migrate`
3. Run seeders `npm run seed`

## Running database undo

1. Run undo migration `npm run migrate:undo`
2. Run undo all migrations `npm run migrate:undo:all`
3. Run undo seeder `npm run seed:undo`
4. Run undo all seeders `npm run seed:undo:all`
