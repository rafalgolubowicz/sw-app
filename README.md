# SW App Monorepo

Monorepo that contains 2 applications

- REST API built with Koa.js and Prisma
- Frontend application built with React.js

## Prerequisites

You need to have Node >= 14 installed to run this app.

You need to have Docker installed to run all of services. [How to install?](https://docs.docker.com/get-docker/)

## Running project in development

- Create `.env` file in the packages/backend directory based on `packages/backend/.env.example`. All of those variables are described at the bottom.

- Create `.env` file in the packages/backend directory based on `packages/frontend/.env.example`. All of those variables are described at the bottom.

Then just run `docker compose up` at the root of the project.

This command will run a few Docker containers on your machine. If you're running it for the first time, it could take a moment to prepare everything.

If you get any error with missing dependencies inside of a container just run `docker compose build`.

## Scripts

- **yarn start:api** - start API service
- **yarn start:ui** - start Frontend service
- **yarn gen-types:api** - generate Prisma types based on schema
- **yarn gen-swagger:api** - generate Swagger definition based on smaller parts (packages/backend/\_\_swagger.json will be rendered)
- **yarn migrate:db** - create a migration with schema changes
- **yarn seed:db** - seed database
