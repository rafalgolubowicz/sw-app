import Koa from 'koa';
import cors from '@koa/cors';

import { CORS_ORIGIN } from '../setup/environment';

const createServer = () => {
  const app = new Koa();

  app.use(cors({ origin: CORS_ORIGIN }));

  return app;
};

export default createServer;
