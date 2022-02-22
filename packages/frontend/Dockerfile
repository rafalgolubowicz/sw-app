FROM node:16

WORKDIR /sw-app-frontend

COPY package.json .
COPY yarn.lock .
COPY packages/frontend packages/frontend

RUN yarn --pure-lockfile --non-interactive

CMD yarn start:ui
