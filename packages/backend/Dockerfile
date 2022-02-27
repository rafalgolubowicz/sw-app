FROM node:16

WORKDIR /sw-app-backend

COPY package.json .
COPY yarn.lock .
COPY packages/backend packages/backend

RUN yarn --pure-lockfile --non-interactive

CMD yarn gen-types:api ; yarn migrate:db ; yarn seed:db ; yarn start:api
