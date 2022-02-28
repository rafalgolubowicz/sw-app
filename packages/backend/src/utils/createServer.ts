import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';

import { CORS_ORIGIN } from '../setup/environment';

const createServer = () => {
  const app = new Koa();

  app.use(cors({ origin: CORS_ORIGIN }));
  app.use(bodyParser());

  return app;
};

export default createServer;
